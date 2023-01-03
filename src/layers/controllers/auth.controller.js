const authService = require('../services/auth.service');

const signUp = async (req, res, next) => {
    const { email, password, confirmPw } = req.body;

    try {
        await authService.signUp(email, password, confirmPw);
        return res.status(201).json('회원가입 성공');
    } catch (err) {
        console.log(err);
        return {
            msg: 'ㄴㄴ'
        };
    }
};

module.exports = {
    signUp
};
