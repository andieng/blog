import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Post from '~/components/Post';
import styles from './PostList.module.scss';

const cx = classNames.bind(styles);

function PostList({ posts }) {
    return (
        <div className={cx('post-list')}>
            {posts.map((item) => (
                <Post
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                    userInfo={item.userInfo}
                    tags={item.tags}
                    reactions={item.reactions}
                />
            ))}
        </div>
    );
}

Post.propTypes = {
    posts: PropTypes.array,
};

export default PostList;
