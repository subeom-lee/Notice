const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/post.controller');

// 전체 게시물 조회
postRouter.get('/', postController.findAllPosts);
// 상세 게시물 조회
postRouter.get('/detail/:postId', postController.findOnePosts);
// 게시물 작성
postRouter.route('/', postController.createPost);
// 게시물 수정
postRouter.put('/:postId', postController.updatePost);
// 게시물 삭제
postRouter.delete('/:postId', postController.deletePost);

module.exports = postRouter;
