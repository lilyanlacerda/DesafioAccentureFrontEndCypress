const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: "https://demoqa.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000, // timeout para comandos
    pageLoadTimeout: 120000, // aumenta o tempo de espera para 2 min
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
