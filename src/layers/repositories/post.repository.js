const { Post } = require('../../models');

const findAllPosts = async () => {
    try {
        const findAllPosts = await Post.findAll({ order: [['createdAt', 'DESC']] });
        return findAllPosts;
    } catch (err) {
        console.log(err);
    }
};

const findOnePost = async (postId) => {
    try {
        const findOnePost = await Post.findOne({ where: { postId } });
        return findOnePost;
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

module.exports = { findAllPosts, findOnePost, createPost, updatePost, deletePost };
