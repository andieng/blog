import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Search from '~/components/Search';
import Post from '~/components/Post';
import * as postService from '~/services/postService';
import * as userService from '~/services/userService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [mergedPosts, setMergedPosts] = useState([]);

    useEffect(() => {
        postService.getAllPosts().then((res) => setPosts(res));
    }, []);

    useEffect(() => {
        userService.getAllUsers().then((res) => setUsers(res));
    }, []);

    // Function to add author's full name and image based on userId
    const merge = (posts, users) => {
        return posts.map((postObj) => {
            const postAuthor = users.find((userObj) => userObj['id'] === postObj['userId']);
            console.log(postAuthor);
            postObj.userFullname = postAuthor.firstName + ' ' + postAuthor.lastName;
            postObj.userImg = postAuthor.image;
            return postObj;
        });
    };

    useEffect(() => {
        setMergedPosts(merge(posts, users));
    }, [posts, users]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <h2 className={cx('blog-introduce')}>A simple blog</h2>
                <Search />
            </div>
            <div className={cx('blog-content')}>
                <h2 className={cx('title')}>ITD Blog</h2>
                <p className={cx('about')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit odio ut erat aliquam
                    consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Cras vel porta diam. Fusce blandit sagittis interdum. Donec non velit risus. Suspendisse ac sem
                    varius magna blandit interdum dictum non eros. Praesent eros felis, posuere sit amet vehicula
                    auctor, consectetur id leo. Aenean lobortis finibus nibh id tempor. Sed iaculis sem lorem, sed
                    sollicitudin risus maximus et. Aliquam erat volutpat. Phasellus eu urna convallis, tincidunt felis
                    eget, placerat sem. Quisque justo est, sodales faucibus urna ut, convallis facilisis ipsum.
                </p>
            </div>
            <div className={cx('posts-list')}>
                {mergedPosts.map((item) => (
                    <Post
                        title={item.title}
                        body={item.body}
                        userImg={item.userImg}
                        userFullname={item.userFullname}
                        tags={item.tags}
                        reactions={item.reactions}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
