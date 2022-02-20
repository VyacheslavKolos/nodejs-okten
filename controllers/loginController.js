const users = require("../db/users");

class loginController {
    renderLogin(req, res) {
        res.render('login');
    }

    loginRedirect(req, res) {
        for (const user of users) {
            if (user.email !== req.body.email) {
                users.push(req.body);
                res.redirect('/users');
            } else {
                res.redirect('/errorPage')
            }
        }
    }
}

module.exports = new loginController();
