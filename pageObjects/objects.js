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
    userLogin: function (userLogin){

        this
        .clickText('Log in')
        .waitForElementPresent('.modal-title', 5000)
        .waitForElementVisible('body', 1000)
        .setValue('@email', 'tGranger@gmail.com')
        .setValue('@password', '12345678')
        .click('@login')
        .waitForElementPresent('@userMenus')

        return this
    },
    
}
//Page Objects
module.exports = {
    url: "https://alpha.yoodlize.com/",
    commands: [yoodCommands],
    elements: {

        login: 'button[type="submit"]',
        password: 'input[name="password"]',
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        month: 'select[name="month"]',
        day: 'select[name="day"]',
        year: 'select[name="year"]',

        randomSelector: {
            selector: ';kljasdhflkjashdfklajsdhf',
            locateStrategy: 'xpath'
        },


        userMenus: '#basic-nav-dropdown',
        Search: '.form-control'



    }
}
