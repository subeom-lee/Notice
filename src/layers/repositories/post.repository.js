const { Post } = require('../../models');

const findAllPosts = async (postId) => {
    try {
        await Post.findAll();
    } catch (err) {
        console.log(err);
    }
};

module.exports = { findAllPosts };
