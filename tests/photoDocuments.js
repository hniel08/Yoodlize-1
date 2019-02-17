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
    'Add a profile photo': browser => {
        //log in to account
        client.userLogin()

            // navigate to add profile photo page
            .click('@userMenus')
            .clickText('Edit Profile')
            .waitForElementPresent('.EditProfile-container-clc6i')
            .click('@photoMenu')

            // add a photo
            .setValue('input[type="file"]', require('path').resolve('/Users/Equa1/Desktop/Dev/Yood/images/userPhoto.jpg'))
        client.pause(1000)

        // verification
        client.waitForElementPresent('@photoTrash')

    },

    'Add Documents': browser => {
        browser.maximizeWindow()

        //Navigate to add documents
        client
            .click('@userMenus')
            .clickText('Edit Profile')
            .waitForElementPresent('@trustMenu')
            .click('@trustMenu')
            .waitForElementPresent('@addDocument')
            .click('@addDocument')

        //Test
        client.waitForElementPresent('input[type="file"]', 5000)
            .setValue('input[type="file"]', require('path').resolve('/Users/Equa1/Desktop/Dev/Yood/images/doc1.jpg'))
        client.waitForElementPresent('.DocumentList-listPhotoMedia-1_GqT')
            .setValue('input[type="file"]', require('path').resolve('/Users/Equa1/Desktop/Dev/Yood/images/doc2.pdf'))
        client.waitForElementPresent('.listPhotoContainer')
        client.pause(5000)

        //verification
        client.userLogout()
        client.userLogin()
            .click('@userMenus')
            .clickText('Edit Profile')
            .waitForElementPresent('@trustMenu')
            .click('@trustMenu')
            .waitForElementPresent('@addDocument')
            .getLocationInView("@addDocument")
            .click('@addDocument')
        client.waitForElementPresent('.listPhotoContainer', 1000)



        client.end()
    },
}