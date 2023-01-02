const { Auth } = require('../../sequelize/models');
const bcrypt = require('bcrypt');

const createSignUp = async (email, password) => {
    try {
        const auth = await Auth.create(email, password);
        return auth;
    } catch (err) {
        console.log(err);
        res.status(400).send({
            errorMessage: '알수없는 에러'
        });
    }
};

module.exports = { createSignUp };
