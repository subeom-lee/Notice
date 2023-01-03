'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Auth extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Auth.init(
        {
            authId: {
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            confirmPw: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'Auth'
        }
    );
    return Auth;
};
