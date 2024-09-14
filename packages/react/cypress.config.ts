/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
import webpackConfig from "./.webpack/webpack.config";

import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";

export const config: Cypress.ConfigOptions = {
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig
    },
    fixturesFolder: "./src/component-tests",
    setupNodeEvents(on, config) {
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");
      getCompareSnapshotsPlugin(on, config);
      on('before:browser:launch', (_browser, launchActions) => {
        launchActions.preferences.width = 1600;
        launchActions.preferences.height = 1080;
        return launchActions;
      });
      config.browsers = config.browsers.filter((b) => b.name == 'electron')
      return config;
    },
    supportFile: "./cypress/support/index.ts",
    retries: {
      runMode: 3,
      openMode: 0
    },
  },
  e2e: {
    // baseUrl: "http://localhost:3000", // this is your app
    specPattern: "./src/performance-tests/**/*.cy.tsx",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser=Cypress.browser, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });
    },
  },
}

export default defineConfig(config);
