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
    }
}
//Page Objects
module.exports = {
    url: "https://alpha.yoodlize.com/",
    commands: [yoodCommands],
    elements: {

        standardLogin: 'button[type="submit"]',
        password: 'input[name="password"]',
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',

        month: 'select[name="month"]',
        day: 'select[name="day"]',
        year: 'select[name="year"]',



        userMenus: '#basic-nav-dropdown',
        Search: '.form-control'



    }
}
