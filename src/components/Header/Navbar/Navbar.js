import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx('wrapper')}>
            <NavLink className={cx('nav-item')} to={'/'}>
                Home
            </NavLink>
            <NavLink className={cx('nav-item')} to={'/'}>
                About
            </NavLink>
            <NavLink className={cx('nav-item')} to={'/'}>
                Contact
            </NavLink>
        </nav>
    );
}

export default Navbar;
