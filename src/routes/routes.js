import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Post from '~/pages/Post';

const publicRoutes = [
    { path: config.routes.home, page: Home },
    { path: config.routes.post, page: Post },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
