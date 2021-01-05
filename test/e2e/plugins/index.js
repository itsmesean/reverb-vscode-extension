/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push('--disable-web-security');
            launchOptions.args.push('--no-sandbox');
            launchOptions.args.push('--auto-open-devtools-for-tabs');
            launchOptions.args.push('--run-without-sandbox-for-testing');
            launchOptions.args.push('--disable-features=IsolateOrigins,site-per-process');

            return launchOptions;
        }
    });
};
