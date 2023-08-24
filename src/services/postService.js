import * as httpRequest from '~/api/httpRequest';

export const getAllPosts = async () => {
    try {
        const res = await httpRequest.get('posts', {
            params: {
                limit: 5,
            },
        });
        return res.posts;
    } catch (err) {
        console.log(err);
    }
};
