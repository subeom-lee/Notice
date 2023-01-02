const express = require('express');
const app = express();
const { sequelize } = require('./sequelize/models');
const routerLoader = require('./layers/_router.loader');

app.use('/api', express.json(), routerLoader);

app.listen(8080, () => {
    console.log('On');
});
