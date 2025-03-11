const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://yourwebsite.com', // Replace with your desired base URL
    retries: {
      runMode: 0, // Don't retry failed tests in run mode
      openMode: 1, // Retry failed tests once in interactive mode (when Cypress is opened)
    },
    screenshotOnRunFailure: true, // Take screenshots when a test fails
    video: false, // Disable video recording for test runs
  },
});
