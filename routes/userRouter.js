const {Router} = require('express');

const userController = require('../controllers/userController');

const users = require('../db/users');


const userRouter = Router();

userRouter.get('/', userController.renderUsers);

userRouter.get('/:userId', userController.getUserById);


module.exports = userRouter;
