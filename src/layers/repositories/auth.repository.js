const { Auth } = require('../../models');
const bcrypt = require('bcrypt');

const createSignUp = async (email, password) => {
    try {
        const auth = await Auth.create(email, password);
        return auth;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { createSignUp };
