import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <h2 className={cx('blog-title')}>A simple blog</h2>
                <div className={cx('search-bar')}>search</div>
            </div>
        </div>
    );
}

export default Home;
