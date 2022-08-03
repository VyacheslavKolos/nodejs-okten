const {Router}=require('express');
const userRouter=require('./userRouter')
const loginRouter=require('./loginRouter')
const userBySignInRouter=require('./userBySignInRouter')
const signInRouter=require('./signInRouter');

const users = require('../db/users');

const routes=Router();

routes.use('/users',userRouter);
routes.use('/login',loginRouter);
routes.use('/userBySignIn',userBySignInRouter);
routes.use('/signIn', signInRouter);


routes.get('/errorPage', (req, res) => {
    res.render('errorPage', {users});
});

routes.use((req, res) => {
    res.render('notFound');
});

module.exports=routes;

