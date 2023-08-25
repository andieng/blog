import * as httpRequest from '~/api/httpRequest';

export const getAllPosts = async () => {
    try {
        const res = await httpRequest.get('posts');
        return res.posts;
    } catch (err) {
        console.log(err);
    }
};

export const getPosts = async (numPosts) => {
    try {
        const res = await httpRequest.get('posts', {
            params: {
                limit: numPosts,
            },
        });
        return res.posts;
    } catch (err) {
        console.log(err);
    }
};
