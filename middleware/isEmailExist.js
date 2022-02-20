const users = require('../db/users')

function isEmailExist(req, res, next) {
    try {
        let counterMail = 0;
        const {email} = req.body;
        for (const user of users) {
            if (user.email === email) {
                counterMail++;
            }
        }
        if (counterMail !== 1) {
            throw new Error('this email is not defined!')
        } else {
            next();
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
}

module.exports = isEmailExist;