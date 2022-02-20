const users = require("../db/users");
const userBySignIn = require("../db/userBySignIn");

class signInController {
    renderSignIn(req, res) {
        res.render('signIn');
    };

    redirectSignIn(req, res) {
        const {email, password} = req.body
        let counter = 0;
        users.map(user => {
            if (user.email === email && user.password === password) {
                userBySignIn.push(user);
                res.redirect('/userBySignIn')
                counter++;
            }
        })
        if (counter !== 1) {
            res.redirect('/errorPage')
        }
    };

}

module.exports = new signInController();
