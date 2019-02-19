module.exports = (pageObjects, email, password) => {
    pageObjects
        .setValue('@email', email)
        .setValue('@password', password)

}