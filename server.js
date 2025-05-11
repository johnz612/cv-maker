// server.js
import express from "express";
import puppeteer from "puppeteer";

const app = express();

app.get("/export.pdf", async (req, res, next) => {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 1) Go to your running Vite app
    await page.goto("http://localhost:5173/", {
      waitUntil: "networkidle0",
    });

    // 2) Make sure print‐CSS is used
    await page.emulateMediaType("print");

    // 3) Wait for your resume container
    await page.waitForSelector("#resume-container", { timeout: 10000 });

    // 4) Inject CSS to hide everything but the resume
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
          #resume-container {
            position: absolute;
            top: 0;
            left: 0;
            /* if you want it to fill the PDF width: */
            width: 100% !important;
          }
        }
      `,
    });

    // 5) Give the browser a moment to apply styles
    await page.waitForTimeout(200);

    // 6) Generate the PDF
    const pdfBuffer = await page.pdf({
      path: "resume.pdf",
      format: "A4",
      printBackground: true,
      margin: {
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
      },
    });

    // 7) Send it back
    res
      .set("Content-Type", "application/pdf")
      .set("Content-Disposition", 'attachment; filename="resume.pdf"')
      .send(pdfBuffer);
  } catch (err) {
    next(err);
  } finally {
    if (browser) await browser.close();
  }
});

app.listen(3001, () => console.log("PDF service on http://localhost:3001"));
