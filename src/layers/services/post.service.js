const postRepository = require('../repositories/post.repository');

const findAllPosts = async () => {
    const findAllPosts = await postRepository.findAllPosts();
    return findAllPosts;
};

const createPost = async (title, content) => {
    const createPost = await postRepository.createPost(title, content);
    return createPost;
};

module.exports = {
    findAllPosts,
    createPost
};
