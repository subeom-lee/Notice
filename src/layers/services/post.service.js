const postRepository = require('../repositories/post.repository');

const findAllPosts = async () => {
    const findAllPosts = await postRepository.findAllPosts();
    return findAllPosts;
};

module.exports = {
    findAllPosts
};
