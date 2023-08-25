import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Search from '~/components/Search';
import PostList from '~/components/PostList';
import BlogBackground from '~/components/BlogBackground';
import * as postService from '~/services/postService';
import * as userService from '~/services/userService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [mergedPosts, setMergedPosts] = useState([]);

    useEffect(() => {
        postService.getPosts(9).then((res) => setPosts(res));
    }, []);

    useEffect(() => {
        userService.getAllUsers().then((res) => setUsers(res));
    }, []);

    // Function to add author's full name and image based on userId
    const merge = (posts, users) => {
        return posts.map((postObj) => {
            const postAuthor = users.find((userObj) => userObj['id'] === postObj['userId']);
            postObj.userInfo = postAuthor;
            postObj.userInfo.fullName = postObj.userInfo.firstName + ' ' + postObj.userInfo.lastName;
            return postObj;
        });
    };

    useEffect(() => {
        setMergedPosts(merge(posts, users));
    }, [posts, users]);

    return (
        <div className={cx('wrapper')}>
            <BlogBackground>
                <h2 className={cx('blog-introduce')}>A simple blog</h2>
                <Search />
            </BlogBackground>
            <div className={cx('blog-content')}>
                <h2 className={cx('title')}>ITD Blog</h2>
                <p className={cx('about')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit odio ut erat aliquam
                    consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Cras vel porta diam. Fusce blandit sagittis interdum. Donec non velit risus.
                </p>
            </div>
            {mergedPosts.length > 0 && <PostList posts={mergedPosts} />}
        </div>
    );
}

export default Home;
