import { BiSearchAlt } from 'react-icons/bi';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <h2 className={cx('blog-title')}>A simple blog</h2>
                {/* <div className={cx('search-bar')}> */}
                <form className={cx('search-form')}>
                    <input className={cx('search-input')} placeholder="Search" />
                    <button className={cx('search-btn')}>
                        <BiSearchAlt />
                    </button>
                </form>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Home;
