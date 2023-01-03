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

const updatePost = async (postId, title, content) => {
    try {
        const updatePost = await Post.update({ title, content }, { where: { postId } });
        return updatePost;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { findAllPosts, createPost, updatePost };
