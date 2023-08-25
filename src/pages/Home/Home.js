import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Search from '~/components/Search';
import PostList from '~/components/PostList';
import BlogBackground from '~/components/BlogBackground';
//import * as postService from '~/services/postService';
//import * as userService from '~/services/userService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const posts = [
    {
        id: 1,
        title: 'His mother had always taught him',
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        userId: 9,
        tags: ['history', 'american', 'crime'],
        reactions: 2,
    },
    {
        id: 2,
        title: 'He was an expert but not in a discipline',
        body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
        userId: 13,
        tags: ['french', 'fiction', 'english'],
        reactions: 2,
    },
    {
        id: 3,
        title: 'Dave watched as the forest burned up on the hill.',
        body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
        userId: 32,
        tags: ['magical', 'history', 'french'],
        reactions: 5,
    },
    {
        id: 4,
        title: 'All he wanted was a candy bar.',
        body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
        userId: 12,
        tags: ['mystery', 'english', 'american'],
        reactions: 1,
    },
    {
        id: 5,
        title: 'Hopes and dreams were dashed that day.',
        body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
        userId: 41,
        tags: ['crime', 'mystery', 'love'],
        reactions: 2,
    },
];
const users = [
    { id: 9, firstName: 'Demetrius', lastName: 'Corkery', image: 'https://robohash.org/excepturiiuremolestiae.png' },
    { id: 13, firstName: 'Trace', lastName: 'Douglas', image: 'https://robohash.org/voluptatemsintnulla.png' },
    { id: 32, firstName: 'Kaya', lastName: 'Emard', image: 'https://robohash.org/etquiquibusdam.png' },
    { id: 12, firstName: 'Assunta', lastName: 'Rath', image: 'https://robohash.org/namquaerataut.png' },
    { id: 41, firstName: 'Nicklaus', lastName: 'Cruickshank', image: 'https://robohash.org/quiaconsecteturaut.png' },
];

function Home() {
    //const [posts, setPosts] = useState([]);
    //const [users, setUsers] = useState([]);
    const [mergedPosts, setMergedPosts] = useState([]);

    // useEffect(() => {
    //     postService.getPosts(5).then((res) => setPosts(res));
    // }, []);

    // useEffect(() => {
    //     userService.getAllUsers().then((res) => setUsers(res));
    // }, []);

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
