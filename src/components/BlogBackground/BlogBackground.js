import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './BlogBackground.module.scss';

const cx = classNames.bind(styles);

function BlogBackground({ children }) {
    return <div className={cx('blog-background')}>{children}</div>;
}

BlogBackground.propTypes = {
    children: PropTypes.node,
};

export default BlogBackground;
