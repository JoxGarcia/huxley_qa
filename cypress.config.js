const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  defaultCommandTimeout: 20000,
  execTimeout: 60000,
  taskTimeout: 60000,
  pageLoadTimeout: 150000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  redirectionLimit: 99999999,
  numTestsKeptInMemory: 15,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  e2e: {
    baseUrl: "https://portal.development.huxleymed.com",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      return config;
    },
  },
});
