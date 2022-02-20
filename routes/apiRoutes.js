const {Router} = require("express");
const userRouter = require("./userRouter");
const loginRouter = require("./loginRouter")
const signInRouter = require("./signInRouter")
const userBySignInRouter = require("./userBySignInRouter")

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRouter);
routes.use('/userBySignIn', userBySignInRouter);

routes.get('/errorPage', (req, res) => {
    res.render('errorPage');
});

routes.use((req, res) => {
    res.render('notFound');
});


module.exports = routes;