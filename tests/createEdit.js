var client = {}
var fillCreate = require('../testAssets/fillCreate.js')
var fillEdit = require('../testAssets/fillEdit.js')
var fillLogin = require('../testAssets/fillLogin.js')
module.exports = {
    beforeEach: browser => {
        client = browser.page.objects()
        client.navigate()
            .waitForElementPresent('.container-fluid', 5000)
    },
    after: browser => {
        browser.end()
    },


    'Create and Edit': browser => {
        client
            //The set up
            .clickText('Sign up')
            .waitForElementPresent('.SignupModal-root-3YXgm')
            .clickText('Sign up with Email')


        // The action
        //
        fillCreate(client, 'E-mail', 'Password', 'First Name', 'Last Name', 'Month', 'Day', 'Year')
        client.click('@login')
        client.userLogout()

            //the verification
            .click('@loginText')
        fillLogin(client, 'E-mail', 'Password')
        client.click('@login')
            .waitForElementPresent('@userMenus')


        //Navigate to Edit fields
        client.waitForElementPresent('.container-fluid', 5000)

            .click('@userMenus')
            .clickText('Edit Profile')
            .waitForElementPresent('.EditProfile-container-clc6i')

            //The Action
            .clearValue('@firstName')
            .clearValue('@lastName')
            .setValue('@gender', 'f')
            .clearValue('@location')
            .clearValue('@describe')

            //Fill fields to Edit
        fillEdit(client, 'First', 'Last', 'Sex', 'Month', 'Day', 'Year', 'Location', 'Description')

        //Save changes
        client.clickText('Save')
    },


    //Now verify changes were made
    'verify edit was successful': browser => {

        client.userLogout(),
            client.waitForElementPresent('.container-fluid', 5000)

                .click('@loginText')

        //Fill Email and Password
        fillLogin(client, 'E-mail', 'Password')
        client.click('@login')
            .waitForElementPresent('@userMenus')

            .click('@userMenus')
            .clickText('Edit Profile')
            .waitForElementPresent('.EditProfile-container-clc6i')

        // Fill fileds to verify
        client.expect.element('@firstName').to.have.value.that.equals('First')
        client.expect.element('@lastName').to.have.value.that.equals('Last')








    }
}
