const {Router}=require('express');

const users=require('../db/users');
const userBySignIn=require('../db/usersBySignIn');

const userBySignInRouter=Router();

userBySignInRouter.get('/',(req, res) => {
    res.render('userBySignIn', {userBySignIn})
});


module.exports=userBySignInRouter;
