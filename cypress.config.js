const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://edus-hlg.senacrs.obi.tec.br",
    setupNodeEvents(on, config) {},
  },
});
