const {Router}=require('express');

const users=require('../db/users');

const loginRouter=Router();

loginRouter.post('/',(req, res) => {
    users.map(user => {
        if (user.email !== req.body.email) {
            users.push(req.body);
            res.redirect('/users');
        } else {
            res.redirect('/errorPage');
        }
    });
});


module.exports=loginRouter;
