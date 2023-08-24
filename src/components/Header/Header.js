import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Navbar from './Navbar';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to="/">
                    <img className={cx('logo-img')} src={images.logo} alt="Blog" />
                    <h1 className={cx('logo-title')}>ITD Blog</h1>
                </Link>
                <Navbar />
            </div>
        </header>
    );
}

export default Header;
