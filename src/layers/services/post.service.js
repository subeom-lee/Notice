const postRepository = require('../repositories/post.repository');

const findAllPosts = async () => {
    const findAllPosts = await postRepository.findAllPosts();

    data = findAllPosts.map((e) => e.get({ plain: true }));

    const displayedAt = (createdAt) => {
        const seconds = (Date.now() + 1000 - Date.parse(createdAt)) / 1000;
        if (seconds < 60) return `방금 전`;
        const minutes = seconds / 60;
        if (minutes < 60) return `${Math.floor(minutes)}분 전`;
        const hours = minutes / 60;
        if (hours < 24) return `${Math.floor(hours)}시간 전`;
        const days = hours / 24;
        if (days < 7) return `${Math.floor(days)}일 전`;
        const weeks = days / 7;
        if (weeks < 5) return `${Math.floor(weeks)}주 전`;
        const months = days / 30;
        if (months < 12) return `${Math.floor(months)}개월 전`;
        const years = days / 365;
        return `${Math.floor(years)}년 전`;
    };

    for (let At of data) {
        At.createdAt = displayedAt(At.createdAt);
    }

    return findAllPosts;
};

const findOnePost = async (postId) => {
    const findOnePost = await postRepository.findOnePost(postId);
    return findOnePost;
};

const createPost = async (title, content) => {
    const createPost = await postRepository.createPost(title, content);
    return createPost;
};

const updatePost = async (postId, title, content) => {
    const updatePost = await postRepository.updatePost(postId, title, content);
    return updatePost;
};

const deletePost = async (postId) => {
    const deletePost = await postRepository.deletePost(postId);
    return deletePost;
};

module.exports = {
    findAllPosts,
    findOnePost,
    createPost,
    updatePost,
    deletePost
};
