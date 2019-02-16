//yoodalize objects
var yoodCommands = {
    //Click by text
    clickText: function (text) {
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()

        return this
    },

    fillFields: function (field) {
        //Fill fields function for boundary value analysis
        if (field.wID) {
            this
                //wid
                .setValue('@wID', field.wID)
        }

        return this
    },
    userLogin: function (userLogin) {
        //The set up
        this
            .clickText('Log in')
            .waitForElementPresent('h4.modal-title', 5000)
            .waitForElementVisible('body', 1000)

            //The action
            .setValue('@email', 'tGranger@gmail.com')
            .setValue('@password', '12345678')
            .click('@login')

            //The Verification
            .waitForElementPresent('@userMenus')

        return this
    },
    userLogout: function (userLogout) {
        // The set up
        this
            .waitForElementPresent('@userMenus')
            .click('@userMenus')
            .waitForElementPresent('@dropDown')

        //The action
        this.api.useXpath()
        this.click('@logout')
        this.api.useCss()

        //The varification
        this.waitForElementNotPresent('@userMenus')
        return this
    },

}
//Page Objects
module.exports = {
    url: "https://alpha.yoodlize.com/",
    commands: [yoodCommands],
    elements: {

        login: 'button[type="submit"]',
        dropDown: '.dropdown-menu',
        password: 'input[name="password"]',
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        month: 'select[name="month"]',
        day: 'select[name="day"]',
        year: 'select[name="year"]',

        logout: {
            selector: '(//button[@class="btn btn-link"])[2]',
            locateStrategy: 'xpath'
        },


        userMenus: '#basic-nav-dropdown',
        Search: '.form-control'



    }
}
