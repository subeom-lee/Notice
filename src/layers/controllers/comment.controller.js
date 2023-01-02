const commentService = require('../services/comment.service');

const getComment = async (req, res, next) => {
    const { postId } = req.params;

    try {
        await commentService.getComment(postId);
        return res.status(200).json('댓글 조회 성공');
    } catch (err) {
        next(err);
    }
};
const createComment = async (req, res, next) => {};
const updateComment = async (req, res, next) => {};

const deleteComment = async (req, res, next) => {};

module.exports = {
    getComment,
    createComment,
    updateComment,
    deleteComment
};
