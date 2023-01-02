const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/auth.controller');

// 회원가입
authRouter.post('/signup', authController.signUp);

module.exports = authRouter;
