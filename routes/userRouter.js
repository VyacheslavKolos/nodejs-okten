const {Router} = require('express');
const users=require('../db/users')

const userRouter = Router();

userRouter.get('/', (req, res) => {
    const {age, city} = req.query;
    if (age && city) {
        const filteredUsers = users.filter(user => user.age === Number(age) && user.city === city)
        res.render('user', {filteredUsers});
    } else {
        res.render('users', {users});
    }
})

module.exports=userRouter;