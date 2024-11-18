const { browser } = require("@wdio/globals");
const fs = require("fs");

exports.config = {
  beforeSuite: async function (suite) {
    console.log("********************", suite);
    const regex = /\/(\w+)/;
    let endpoint = suite.title.match(regex);
    endpoint = endpoint ? endpoint[1] : null;
    await browser.maximizeWindow();
    if (endpoint)
      await browser.url(`https://automationexercise.com/${endpoint}`);
    else await browser.url("https://automationexercise.com/");
  },

  onPrepare: async function () {
    console.log("🧹 Limpando diretório 'allure-results'...");
    const path = "./allure-results";
    if (fs.existsSync(path)) {
      fs.rmSync(path, { recursive: true, force: true });
    }
  },

  afterTest: async function (test, context, { error }) {
    if (error) {
      console.log(`📸 Capturando screenshot para o teste falho: ${test.title}`);
      const screenshot = await browser.takeScreenshot();
      const screenshotPath = `./allure-results/screenshots/${test.title}.png`;
      fs.promises.writeFile(screenshotPath, screenshot, "base64");
    }
  },

  onComplete: function (exitCode, config, capabilities, results) {
    if (results.failed > 0) {
      console.log(`❌ ${results.failed} teste(s) falharam.`);
    } else {
      console.log("✅ Todos os testes passaram!");
    }
  },

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  runner: "local",
  specs: ["./src/specs/*.ts"],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: process.env.HEADLESS
          ? ["--headless", "--disable-gpu", "--window-size=1920,1080"]
          : ["--disable-infobars", "--window-size=1920,1080"],
      },
    },
  ],

  logLevel: "debug",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
