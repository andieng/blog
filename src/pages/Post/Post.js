import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { MdAddReaction, MdEmail } from 'react-icons/md';
import styles from './Post.module.scss';
import BlogBackground from '~/components/BlogBackground';
import * as postService from '~/services/postService';
import DetailPost from '~/components/DetailPost';

const cx = classNames.bind(styles);

function Post() {
    const { state: post } = useLocation();
    const [otherPosts, setOtherPosts] = useState([]);

    useEffect(() => {
        postService.getPosts(4).then((res) => setOtherPosts(res));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <BlogBackground>
                <h2 className={cx('title')}>Blog Details</h2>
            </BlogBackground>
            <div className={cx('details')}>
                <DetailPost post={post} />
                <div className={cx('other-posts')}>
                    <h3>Other Posts</h3>
                    <div className={cx('posts-container')}>
                        <div className={cx('other-post')}>
                            <div className={cx('other-user')}>
                                <img
                                    className={cx('other-avatar')}
                                    src="https://robohash.org/excepturiiuremolestiae.png"
                                    alt=""
                                />
                                <h3 className={cx('other-name')}>Demetrius Corkery</h3>
                            </div>
                            <p>Title</p>
                            <div className={cx('other-reaction')}>
                                <MdAddReaction />
                                <span className={cx('other-number-reaction')}>3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
