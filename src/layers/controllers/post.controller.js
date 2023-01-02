const postService = require('../services/post.service');

const findAllPosts = async (req, res, next) => {
    const { postId } = req.params;
    const { userId } = res.locals.user;

    try {
        await postService.findAllPosts(postId, userId);
        return res.status(200).json('게시물 전체 조회 성공');
    } catch (err) {
        next(err);
    }
};

const findOnePosts = async (req, res, next) => {};

const createPost = async (req, res, next) => {};

const updatePost = async (req, res, next) => {};

const deletePost = async (req, res, next) => {};

module.exports = {
    findAllPosts,
    findOnePosts,
    createPost,
    updatePost,
    deletePost
};
