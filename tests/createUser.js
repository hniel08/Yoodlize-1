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
// Lets make a User!
'create user' : browser =>{
    //navigate to login fields
    client
    .clickText('Sign up')
    .waitForElementPresent('.modal-title', 5000)
    .clickText('Sign up with Email')
    .waitForElementPresent('.control-label', 5000)

    // fill user info
    .setValue('@firstName', 'Tom')
    .setValue('@lastName','Adamson')
    .setValue('@email', 'tAdamson@consitiution.com')
    .setValue('@password', '12345678')
    .setValue('@month', '8')
    .setValue('@day', '31')
    .setValue('@year','1952')

    // submit info and verify account created
    .click('@login')
    .waitForElementPresent('@userMenus', 5000)

}
}