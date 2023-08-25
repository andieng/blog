import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { MdOutlineAddReaction } from 'react-icons/md';
import styles from './Post.module.scss';
import BlogBackground from '~/components/BlogBackground';
import * as postService from '~/services/postService';
import DetailPost from '~/components/DetailPost';

const cx = classNames.bind(styles);

function Post() {
    const { state: post } = useLocation();
    const [otherPosts, setOtherPosts] = useState([]);

    useEffect(() => {
        postService.getPosts(4).then((res) => {
            const result = res.filter((otherPost) => otherPost.id !== post.id);
            setOtherPosts(result);
        });
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
                        {otherPosts.map((item) => (
                            <div key={item.id} className={cx('other-post')}>
                                <p className={cx('other-title')}>{item.title}</p>
                                <div className={cx('other-reaction')}>
                                    <MdOutlineAddReaction />
                                    <span className={cx('other-number-reaction')}>{item.reactions}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
