const postRepository = require('../repositories/post.repository');

const findAllPosts = async (postId) => {
    await postRepository.findAllPosts(postId);
};

module.exports = {
    findAllPosts
};
