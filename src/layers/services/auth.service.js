const authRepository = require('../repositories/auth.repository');
const Joi = require('Joi');

const signUp = async (email, password, confirmPw) => {
    try {
        const schema = Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().min(10).max(15).required(),
            confirmPw: Joi.ref('password')
        });
        try {
            await schema.validateAsync({ email, password, confirmPw });
        } catch (err) {
            console.log(err);
        }
        if (password !== confirmPw) {
            return '패스워드가 패스워드확인란과 일치하지 않습니다.';
        }
    } catch (err) {
        next(err);
        console.log(err);
    }

    await authRepository.createSignUp(email, password);
};

module.exports = {
    signUp
};
