const express = require('express');
const commentRouter = express.Router();
const commentController = require('../controllers/comment.controller');

// 댓글 조회
commentRouter.get('/', commentController.getComment);
// 댓글 작성
commentRouter.post('/', commentController.createComment);
// 댓글 수정
commentRouter.put('/:commentId', commentController.updateComment);
// 댓글 삭제
commentRouter.delete('/:commentId', commentController.deleteComment);

module.exports = commentRouter;
