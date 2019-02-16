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
            .clickText('Profile Photo')

            // add a photo
            .setValue('input[type="file"]', require('path').resolve('/Users/Equa1/Desktop/Dev/Yood/images/userPhoto.jpg'))
            client.pause(1000)

        // verification
        client.waitForElementPresent('@photoTrash')

    },

    'Add Documents': browser => {
        //log in to account
         client.userLogout()
            .userLogin()
            

            //Navigate to precondition
            .click('@userMenus')
            .clickText('Edit Profile')
            .clickText('Trust and Verification')
            .getLocationInView("@addDocument")
            .click('@addDocument')

            //Test
            client.waitForElementPresent('.DocumentVerification-container-3d-DR',1000)
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
            .clickText('Trust and Verification')
            .getLocationInView("@addDocument")
            .click('@addDocument')
            client.waitForElementPresent('.listPhotoContainer',1000)
            
    

client.end()
    },
}