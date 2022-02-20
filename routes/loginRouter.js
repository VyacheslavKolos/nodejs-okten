const {Router} = require('express');
const users = require('../db/users')
const loginController = require('../controllers/loginController')
const isUserValid=require('../middleware/isUserValid')

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);

loginRouter.post('/',isUserValid, loginController.loginRedirect);

module.exports = loginRouter;