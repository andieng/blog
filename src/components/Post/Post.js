import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post({ title, body, userImg, userFullname, tags, reactions }) {
    return (
        <div className={cx('wrapper')}>
            <h3>{title}</h3>
            <div className={cx('user')}>
                <img className={cx('avatar')} src={userImg} alt={userFullname} />
                <h3 className={cx('name')}>{userFullname}</h3>
            </div>
            <p className={cx('content')}>{body}</p>
            <div className={cx('reaction')}>
                <span className={cx('number-reaction')}>{reactions}</span>
            </div>
            <ul className={cx('tags')}>
                {tags.map((item, index) => (
                    <li className={cx('tag-item')} key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <button className={cx('read-more-btn')} type="button">
                Read more
            </button>
        </div>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    userImg: PropTypes.string.isRequired,
    userFullname: PropTypes.string.isRequired,
    tags: PropTypes.array,
    reactions: PropTypes.number,
};

export default Post;
