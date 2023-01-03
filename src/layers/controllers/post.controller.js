const postService = require('../services/post.service');

const findAllPosts = async (req, res, next) => {
    try {
        const findAllPosts = await postService.findAllPosts();
        return res.status(200).json({ findAllPosts });
    } catch (err) {
        console.log(err);
    }
};

const findOnePosts = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const findOnePosts = await postService.findOnePosts(postId);
        return res.status(200).json({ findOnePosts });
    } catch (err) {
        console.log(err);
    }
};

const createPost = async (req, res, next) => {
    const { title, content } = req.body;
    try {
        const createPost = await postService.createPost(title, content);
        return res.status(201).json({ createPost });
    } catch (err) {
        console.log(err);
    }
};

const updatePost = async (req, res, next) => {
    const { postId } = req.params;
    const { title, content } = req.body;
    try {
        const updatePost = await postService.updatePost(postId, title, content);
        return res.status(201).json({ updatePost });
    } catch (err) {
        console.log(err);
    }
};

const deletePost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const deletePost = await postService.deletePost(postId);
        return res.status(200).json({ deletePost });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    findAllPosts,
    findOnePosts,
    createPost,
    updatePost,
    deletePost
};
