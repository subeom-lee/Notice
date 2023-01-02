const authRepository = require('../repositories/auth.repository');
const Joi = require('Joi');

const signUp = async (email, password, confirmPw) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().min(2).max(20).required().noWhiteSpaces(),
        password: Joi.string().min(10).max(15).required().noWhiteSpaces(),
        confirmPw: Joi.string().min(10).max(15).required().noWhiteSpaces()
    });
    try {
        await schema.validateAsync({ email, password, confirmPw });
    } catch (err) {
        console.log(err);
        res.status(400).send({
            errorMessage: '알수없는 에러'
        });
    }
    if (password !== confirmPw) {
        res.status(400).send({
            errMessage: '패스워드가 패스워드확인란과 일치하지 않습니다.'
        });
    }

    await authRepository.createSignUp(email, password);
};

module.exports = {
    signUp
};
