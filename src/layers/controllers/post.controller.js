const postService = require('../services/post.service');

const findAllPosts = async (req, res, next) => {
    try {
        const findAllPosts = await postService.findAllPosts();
        return res.render('findAllPosts', { data: findAllPosts });
        // res.status(200).json({ data: findAllPosts });
        // res.render('findAllPosts', { data: findAllPosts });
    } catch (err) {
        console.log(err);
    }
};

const findOnePost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const findOnePost = await postService.findOnePost(postId);
        return res.render('findOnePost', { data: findOnePost });
    } catch (err) {
        console.log(err);
    }
};

const createPost = async (req, res, next) => {
    const { title, content } = req.body;
    try {
        await postService.createPost(title, content);
        return res.redirect('/api/post');
    } catch (err) {
        console.log(err);
    }
};

const updatePost = async (req, res, next) => {
    const { postId } = req.params;
    const { title, content } = req.body;
    try {
        await postService.updatePost(postId, title, content);
        return res.render('findAllPosts');
    } catch (err) {
        console.log(err);
    }
};

const deletePost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        await postService.deletePost(postId);
        return res.redirect('/api/post');
    } catch (err) {
        console.log(err);
    }
};

const writePost = async (req, res, next) => {
    try {
        return res.render('writePost');
    } catch (err) {
        console.log(err);
    }
};

// const completePost = async (req, res, next) => {
//     try {
//         return res.render('completePost');
//     } catch (err) {
//         console.log(err);
//     }
// };

module.exports = {
    findAllPosts,
    findOnePost,
    createPost,
    updatePost,
    deletePost,
    writePost
    // completePost
};
