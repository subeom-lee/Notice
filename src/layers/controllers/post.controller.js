const postService = require('../services/post.service');

const findAllPosts = async (req, res, next) => {
    try {
        const findAllPosts = await postService.findAllPosts();
        return res.status(200).json({ findAllPosts });
    } catch (err) {
        console.log(err);
    }
};

const findOnePosts = async (req, res, next) => {};

const createPost = async (req, res, next) => {
    const { title, content } = req.body;
    try {
        const createPost = await postService.createPost(title, content);
        return res.status(201).json({ createPost });
    } catch (err) {
        console.log(err);
    }
};

const updatePost = async (req, res, next) => {};

const deletePost = async (req, res, next) => {};

module.exports = {
    findAllPosts,
    findOnePosts,
    createPost,
    updatePost,
    deletePost
};
