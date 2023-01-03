const { Post } = require('../../models');

const findAllPosts = async () => {
    try {
        const findAllPosts = await Post.findAll({});
        return findAllPosts;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { findAllPosts };
