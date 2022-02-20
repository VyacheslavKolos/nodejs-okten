const {Router} = require('express');
const users = require('../db/users')
const UserController = require('../controllers/userController')

const userRouter = Router();

userRouter.get('/', UserController.renderUsers);

userRouter.get('/:userId', UserController.getUserById);

module.exports = userRouter;