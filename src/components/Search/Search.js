import { BiSearchAlt } from 'react-icons/bi';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <form className={cx('search-form')}>
            <input className={cx('search-input')} placeholder="Search" />
            <button className={cx('search-btn')}>
                <BiSearchAlt />
            </button>
        </form>
    );
}

export default Search;
