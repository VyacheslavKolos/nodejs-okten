const {Router}=require('express');

const users=require('../db/users');

const userRouter=Router();

userRouter.get('/',(req, res) => {
    const {age, city} = req.query;
    if (age && city) {
        const filteredUsers = users.filter(user => user.age === Number(age) && user.city === city);
        res.render('user', {filteredUsers});
    } else {
        res.render('users', {users});
    }
});

userRouter.get('/:userId',(req, res) => {
    const {userId} = req.params;
    res.json(users[userId - 1]);
});





module.exports=userRouter;
