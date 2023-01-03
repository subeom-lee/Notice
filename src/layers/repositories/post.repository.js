const { Post } = require('../../models');

const findAllPosts = async () => {
    try {
        const findAllPosts = await Post.findAll({});
        return findAllPosts;
    } catch (err) {
        console.log(err);
    }
};

const createPost = async (title, content) => {
    try {
        const createPost = await Post.create({ title, content });
        return createPost;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { findAllPosts, createPost };
