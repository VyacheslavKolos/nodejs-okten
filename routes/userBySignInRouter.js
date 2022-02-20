const {Router} = require('express');
const users = require('../db/users')
const userBySignIn = require('../db/userBySignIn')
const UserBySignInController = require('../controllers/userBySignInController')

const userBySignInRouter = Router();

userBySignInRouter.get('/', UserBySignInController.renderUserBySignIn);

module.exports = userBySignInRouter;