const postRepository = require('../repositories/post.repository');

const findAllPosts = async () => {
    const findAllPosts = await postRepository.findAllPosts();
    return findAllPosts;
};

const createPost = async (title, content) => {
    const createPost = await postRepository.createPost(title, content);
    return createPost;
};

const updatePost = async (postId, title, content) => {
    const updatePost = await postRepository.updatePost(postId, title, content);
    return updatePost;
};

module.exports = {
    findAllPosts,
    createPost,
    updatePost
};
