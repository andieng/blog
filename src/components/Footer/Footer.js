import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return <div className={cx('wrapper')}>&#169; 2023 Nguyen Ngoc Thuy | All Rights Reserved</div>;
}

export default Footer;
