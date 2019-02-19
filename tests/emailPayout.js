var client = {}
var fillLogin = require('../testAssets/fillLogin.js')
var fillPayout = require('../testAssets/fillPayout.js')
module.exports = {
    beforeEach: browser => {
        client = browser.page.objects()
        client.navigate()
            .waitForElementPresent('.container-fluid', 5000)
    },
    after: browser => {
        browser.end()
    },

    'Send Email address verification': browser => {
        //Login 
        client
            .clickText('Log in')
            .waitForElementPresent('h4.modal-title', 5000)
            .waitForElementVisible('body', 1000)

        // Fill Out Email And Password
        fillLogin(client, 'E-mail', 'Password')

        client.click('@login')
        client.pause(2000)


        //Navigate to Trust page
        client.click('@userMenus')
            .clickText('Edit Profile')
            .clickText('Trust and Verification')
        client.pause(2000)

            // Request the verification e-mail
            .clickText('Verify Email')
        client.pause(5000)

    },

    'Link payout': browser => {
        //Navigate to Trust page
        browser.maximizeWindow()

        client
            .click('@userMenus')
            .clickText('Account Settings')
            .waitForElementPresent('@payout')
            .click('@payout')
        client.pause(2000)
            .clickText('Add Payout Method')

        // Add Payout Method

        client.pause(1000)
            .waitForElementPresent('.panel-heading', 1000)

        // Fill Out Payment Address
        fillPayout(client, 'Address', 'City', 'State', 'Zip')
        client.click('@next')
            .waitForElementPresent('.panel-body', 1000)
            .waitForElementPresent('@paypal')
            .click('@paypal')
            .click('@next')


            .waitForElementPresent('@payEmail')
            .setValue('@payEmail', 'E-mail')
            .click('@next')

            //Verification
            .waitForElementPresent('@defaultPayout')


        browser.end()
    }
}