var client = {}
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
    'Add a profile photo and documents': browser => {
        //log in to account
        browser.maximizeWindow()
        client.clickText('Log in')
            .waitForElementPresent('h4.modal-title', 5000)
            .waitForElementVisible('body', 1000)

            // Fill Out Email And Password
            fillLogin(client, 'E-mail', 'Password')
            client.waitForElementPresent('@userMenus')
        

            // navigate to add profile photo page
            client.click('@userMenus')
            .clickText('Edit Profile')
            .waitForElementPresent('.EditProfile-container-clc6i')
            .clickText('Profile Photo')

            // add a photo
            .setValue('input[type="file"]', require('path').resolve('/Users/Equa1/Desktop/Dev/Yood/images/userPhoto.jpg'))

        // verification
        client.pause(2000)
        client.waitForElementPresent('@photoTrash')


            //Navigate to adding Documents
            .clickText('Trust and Verification')
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
        .clickText('Log in')
            .waitForElementPresent('h4.modal-title', 5000)
            .waitForElementVisible('body', 1000)

            // Fill Out Email And Password
            fillLogin(client, 'E-mail', 'Password')
            client.waitForElementPresent('@userMenus')


            client.click('@userMenus')
            .clickText('Edit Profile')
            .clickText('Trust and Verification')
            .waitForElementPresent('@addDocument')
            .click('@addDocument')
        client.waitForElementPresent('.listPhotoContainer', 1000)



        client.end()
    },
}