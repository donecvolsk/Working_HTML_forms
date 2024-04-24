import puppetteer from "puppeteer";
import { fork } from "child_process";

describe("test popover", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = "http://localhost:8082";

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });
    browser = await puppetteer.launch({
      //headless: false, // show gui
      //slowMo: 100,
      //args: ["--no-sandbox"],
      //devtools: true, // show devTools
    });
    1000;
    page = await browser.newPage();
  }, 35000);

  test("click on button", async () => {
    await page.goto(baseUrl);
    const btn = await page.$(".buttonClass");
    await btn.click();
    await page.waitForSelector(".popover");
    expect(await page.waitForSelector(".popover")).toBeTruthy();
  }, 35000);

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
});
