require('dotenv').config({ path: 'configs/.env.prod' });

exports.config = {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: process.env.BROWSER || 'chrome',
        'goog:chromeOptions': {
          args: [
              '--headless',
              '--disable-gpu',
              '--no-sandbox',
              '--disable-dev-shm-usage',
              '--window-size=1280,800'
          ]
      }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        "spec",
        [
          "allure",
          {
            outputDir: "allure-results",
          },
        ],
      ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
