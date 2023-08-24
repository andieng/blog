import * as httpRequest from '~/api/httpRequest';

export const getAllUsers = async () => {
    try {
        const res = await httpRequest.get('users', {
            params: {
                limit: 100,
            },
        });
        return res.users;
    } catch (err) {
        console.log(err);
    }
};
