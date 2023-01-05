const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/post.controller');

// 게시물 전체조회
postRouter.get('/', postController.findAllPosts);
// 게시물 상세조회
postRouter.get('/detail/:postId', postController.findOnePost);
// 게시물 작성
postRouter.post('/', postController.createPost);
// 게시물 수정
postRouter.put('/:postId', postController.updatePost);
// 게시물 삭제
postRouter.delete('/:postId', postController.deletePost);
// 게시물 작성 페이지
postRouter.get('/write', postController.writePost);
// 게시물 수정 페이지
postRouter.get('/edit/:postId', postController.editPost);

module.exports = postRouter;
