const users = require("../db/users");
const userBySignIn = require("../db/userBySignIn");

class UserBySignInController {
    renderUserBySignIn(req, res) {
        res.render('userBySignIn', {userBySignIn})
    }
}

module.exports = new UserBySignInController();
