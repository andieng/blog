import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { MdAddReaction } from 'react-icons/md';
import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post({ id, title, body, userInfo, tags, reactions }) {
    const to = `/post/${id}`;
    const state = {
        id,
        title,
        body,
        userInfo,
        tags,
        reactions,
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <img className={cx('avatar')} src={userInfo.image} alt={userInfo.fullName} />
                <h3 className={cx('name')}>{userInfo.fullName}</h3>
            </div>
            <h3 className={cx('title')}>{title}</h3>
            <p className={cx('content')}>{body}</p>
            <div className={cx('reaction')}>
                <MdAddReaction />
                <span className={cx('number-reaction')}>{reactions}</span>
            </div>
            <ul className={cx('tags')}>
                {tags.map((item, index) => (
                    <li className={cx('tag-item')} key={index}>
                        #{item}
                    </li>
                ))}
            </ul>
            <Link className={cx('read-more-btn')} to={to} state={state}>
                Read more
            </Link>
        </div>
    );
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    userInfo: PropTypes.object.isRequired,
    tags: PropTypes.array,
    reactions: PropTypes.number,
};

export default Post;
