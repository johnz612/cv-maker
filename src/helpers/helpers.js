import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export async function generatePDF(printableRef) {
  const elem = printableRef.current;
  if (!elem) return;

  // —————————————————————————————
  // 1) Measure your DOM in CSS pixels
  // —————————————————————————————
  const cssW = elem.scrollWidth;
  const cssH = elem.scrollHeight;

  // —————————————————————————————
  // 2) Create a dummy PDF to get A4 dims in px
  // —————————————————————————————
  const pdf = new jsPDF({ unit: "px", format: "a4" });
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();

  // —————————————————————————————
  // 3) Snapshot with html2canvas at natural CSS size
  // —————————————————————————————
  const canvas = await html2canvas(elem, {
    width: cssW,
    height: cssH,
    scale: 2, // higher resolution
    useCORS: true,
    scrollX: -window.scrollX,
    scrollY: -window.scrollY,
    onclone: (clonedDoc) => {
      // un-fix heights so html2canvas paints the full layout
      const wrap = clonedDoc.getElementById("printable");
      const sidebar = clonedDoc.getElementById("sidebar");
      if (wrap)
        (wrap.style.height = `${cssH}px`), (wrap.style.overflow = "visible");
      if (sidebar)
        (sidebar.style.height = `${cssH}px`),
          (sidebar.style.overflow = "visible");
    },
  });
  const imgData = canvas.toDataURL("image/png");

  // —————————————————————————————
  // 4) Compute the image’s PDF dimensions
  // —————————————————————————————
  // In canvas: canvas.width  = cssW * scale
  //            canvas.height = cssH * scale
  const canvasW = canvas.width;
  const canvasH = canvas.height;

  // Draw at natural CSS width (or clamp to pageW if it’s wider)
  const imgPDFW = Math.min(cssW, pageW);
  // Compute height that keeps aspect ratio
  const imgPDFH = (canvasH * imgPDFW) / canvasW;

  // —————————————————————————————
  // 5) Decide if and how many extra pages
  // —————————————————————————————
  const pageCount = imgPDFH > pageH ? Math.ceil(imgPDFH / pageH) : 1;

  // —————————————————————————————
  // 6) Render each page
  // —————————————————————————————
  let yOffset = 0;
  for (let i = 0; i < pageCount; i++) {
    if (i > 0) pdf.addPage();

    // (a) paint the sidebar full-height
    const sbEl = elem.querySelector("#sidebar");
    const sbW = sbEl ? (sbEl.offsetWidth / cssW) * imgPDFW : imgPDFW * 0.25; // fallback to 25%
    pdf.setFillColor(22, 56, 83); // bg-[#163853]
    pdf.rect(0, 0, sbW, pageH, "F");

    // (b) stamp the slice of your full screenshot
    pdf.addImage(
      imgData,
      "PNG",
      0, // left
      yOffset, // vertical shift into the big image
      imgPDFW, // width in PDF
      imgPDFH // height in PDF
    );

    yOffset -= pageH;
  }

  // —————————————————————————————
  // 7) Save
  // —————————————————————————————
  pdf.save("resume.pdf");
}
