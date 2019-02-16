var client = {}
// var data = require('../testAssets/dataDriven')
module.exports = {
    beforeEach: browser => {
        client = browser.page.objects()
        client.navigate()
            .waitForElementPresent('.container-fluid', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Log In': browser => {
        //Login
        client.userLogin(),
            client.waitForElementPresent('.container-fluid', 5000)

        //Logout
        client.userLogout(),
            client.waitForElementPresent('.container-fluid', 5000)

        // Log back in
        client.userLogin()
        client.waitForElementPresent('.container-fluid', 5000)

    },

}
