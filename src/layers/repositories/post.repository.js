const { Post } = require('../../models');

const findAllPosts = async () => {
    try {
        const findAllPosts = await Post.findAll({});
        return findAllPosts;
    } catch (err) {
        console.log(err);
    }
};

const findOnePosts = async (postId) => {
    try {
        const findOnePosts = await Post.findOne({ where: { postId } });
        return findOnePosts;
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

const deletePost = async (postId) => {
    try {
        const deletePost = await Post.destroy({ where: { postId } });
        return deletePost;
    } catch (err) {
        console.log(err);
    }
};
module.exports = { findAllPosts, findOnePosts, createPost, updatePost, deletePost };
