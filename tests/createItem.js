var client = {}
module.exports = {
    beforeEach: browser => {
        client = browser.page.objects()
        client.navigate()
            .waitForElementPresent('.container-fluid', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Add an item': browser => {
        client.hannahLogin()
            .clickText('List Your Stuff')
            .clickText('GET STARTED')
    },


}