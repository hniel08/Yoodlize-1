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

    'Send Email address verification': browser => {
        client.userLogin()

            //Navigate to Trust page
            .click('@userMenus')
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
            .setValue('@address1', '123 Fake st.')
            .setValue('@city', 'Huntington Beach')
            .setValue('@state', 'Ca')
            .setValue('@zip', '92646')

            .click('@next')
            .waitForElementPresent('.panel-body', 1000)
            .waitForElementPresent('@paypal')
            .click('@paypal'),
            client.click('@next')


                .waitForElementPresent('input[name="payEmail"]')
                .setValue('input[name="payEmail"]', 'AJsPayPal@gmail.com')
                .click('@next')

                //Verification
                .waitForElementPresent('@defaultPayout')


        browser.end()
    }
}