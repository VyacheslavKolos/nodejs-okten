const users = require("../db/users");

class UserController {
    renderUsers(req, res) {
        const {age, city} = req.query;
        if (age && city) {
            const filteredUsers = users.filter(user => user.age === Number(age) && user.city === city)
            res.render('user', {filteredUsers});
        } else {
            res.render('users', {users});
        }
    }

    getUserById(req, res) {
        const {userId} = req.params;
        const user = users[userId - 1];
        res.json(user);
    }
}

module.exports = new UserController();
