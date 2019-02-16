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
    'Create and Edit': browser => {
        client
            //create and verify successful creation
            .createUser()
        client.userLogout()
        client.userLogin()

        //navigate to Edit fields
        client.waitForElementPresent('.container-fluid', 5000)

            .click('@userMenus')
            .clickText('Edit Profile')
            .waitForElementPresent('.EditProfile-container-clc6i')

            //Edit the account
            .clearValue('@firstName')
            .setValue('@firstName', 'Shelby')
            .clearValue('@lastName')
            .setValue('@lastName', 'Proctor')
            .setValue('@gender', 'f')
            .setValue('@month', '7')
            .setValue('@day', '15')
            .setValue('@year', '1984')
            .clearValue('@location')
            .setValue('@location', 'The defiance in deep space')
            .clearValue('@describe')
            .setValue('@describe', 'Former fleet admiral, trying to make a couple extra bucks')

            //Save changes
            .clickText('Save')
    },


    //Now verify changes were made and add photo
    'verify edit was successful': browser => {

        client.userLogout(),
            client.waitForElementPresent('.container-fluid', 5000)

        client.userLogin(),
            client.waitForElementPresent('.container-fluid', 5000)

                .click('@userMenus')
                .clickText('Edit Profile')
                .waitForElementPresent('.EditProfile-container-clc6i')
        client.expect.element('@firstName').to.have.value.that.equals('Shelby')
        client.expect.element('@lastName').to.have.value.that.equals('Proctor')
        client.expect.element('@gender').to.have.value.that.equals('Female')
        client.expect.element('@month').to.have.value.that.equals('6')
        client.expect.element('@day').to.have.value.that.equals('15')
        client.expect.element('@year').to.have.value.that.equals('1984')
        client.expect.element('@location').to.have.value.that.equals('The defiance in deep space')
        client.expect.element('@describe').to.have.value.that.equals('Former fleet admiral, trying to make a couple extra bucks')








    }
}
