const users = require('../db/users');

class LoginController {

    renderLogin(req, res) {
        res.render('login');
    }

    loginUser(req, res) {
        users.map(user => {
            if (user.email !== req.body.email) {
                users.push(req.body);
                res.redirect('/users');
            } else {
                res.redirect('/errorPage');
            }
        });
    }

}

module.exports = new LoginController();
