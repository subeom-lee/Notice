const postService = require('../services/post.service');

const findAllPosts = async (req, res, next) => {
    try {
        const findAllPosts = await postService.findAllPosts();
        return res.render('findAllPosts', { data: findAllPosts });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
};

const findOnePost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const findOnePost = await postService.findOnePost(postId);
        return res.render('findOnePost', { data: findOnePost });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
};

const createPost = async (req, res, next) => {
    const { title, content } = req.body;
    try {
        const createPost = await postService.createPost(title, content);
        return res.status(201).json({ message: '게시글 작성 완료', data: { createPost } });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
};

const updatePost = async (req, res, next) => {
    const { postId } = req.params;
    const { title, content } = req.body;
    console.log(title, content);
    try {
        const updatePost = await postService.updatePost(postId, title, content);
        return res.status(201).json({ message: '게시글 수정 완료', data: { updatePost } });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
};

const deletePost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const deletePost = await postService.deletePost(postId);
        return res.status(200).json({ message: '게시글 삭제 완료', data: { deletePost } });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
};

const writePost = async (req, res, next) => {
    try {
        return res.render('writePost');
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
};

const editPost = async (req, res, next) => {
    try {
        const { postId } = req.params;
        const findOnePost = await postService.findOnePost(postId);
        return res.render('editPost', { data: findOnePost });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
};

module.exports = {
    findAllPosts,
    findOnePost,
    createPost,
    updatePost,
    deletePost,
    writePost,
    editPost
};
