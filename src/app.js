const express = require('express');
const app = express();
const { sequelize } = require('./models');
const routerLoader = require('./layers/_router.loader');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', express.json(), routerLoader);

sequelize
    .sync({ force: false }) // true로 변경시 DB 삭제
    .then(() => {
        console.log('데이터 베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

app.set('view engine', 'ejs');
app.set('views', __dirname + '/layers/view');
app.engine('ejs', require('ejs').__express);

app.get('/posts/new', function (req, res) {
    res.render('new-post-form.ejs');
});

app.listen(8080, () => {
    console.log('On');
});
