const {Router} = require('express');
const users = require('../db/users')
const userBySignIn = require('../db/userBySignIn')
const signInController = require('../controllers/signInController')
const isEmailExist = require('../middleware/isEmailExist')

const signInRouter = Router();

signInRouter.get('/', signInController.renderSignIn);

signInRouter.post('/', isEmailExist, signInController.redirectSignIn)

module.exports = signInRouter;