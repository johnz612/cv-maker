import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 1) Navigate to your running app
  await page.goto("http://localhost:5173/", {
    waitUntil: "networkidle0",
  });

  // 2) Wait until your component is in the DOM
  await page.waitForSelector("#resume-container");

  // 3) Inject print‐only CSS to hide everything but #my-component
  await page.addStyleTag({
    content: `
      @media print {
        body * {
          visibility: hidden !important;
        }
        #resume-container,
        #resume-container * {
          visibility: visible !important;
        }
        /* pin it to the top-left so it fills the PDF page */
        #resume-container {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    `,
  });

  // 4) Generate the PDF (only #my-component will be visible)
  await page.pdf({
    path: "component.pdf",
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  console.log("✅ component.pdf generated");
})();
