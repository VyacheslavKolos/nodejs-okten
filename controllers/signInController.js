const users = require('../db/users');
const usersBySignIn = require('../db/usersBySignIn');

class SignInController {

    renderSignIn(req, res) {
        res.render('signIn');
    }

    signIn(req,res){
        const {email, password} = req.body;
        console.log(req.body);
        users.map(user => {
            if (user.email === email && user.password === password) {
                usersBySignIn.push(user);
                res.redirect('/userBySignIn');
            } else {
                res.redirect('/errorPage');
            }
        });
    }

}

module.exports = new SignInController();
