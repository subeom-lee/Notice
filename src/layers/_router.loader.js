const router = require('express').Router();
const authRouter = require('./routes/auth.router');
const postRouter = require('./routes/post.router');

router.use('/auth', authRouter);
router.use('/post', postRouter);

module.exports = router;
