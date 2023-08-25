import classNames from 'classnames/bind';
import { MdAddReaction, MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { BiCalendar, BiSolidUserCircle, BiSolidUserBadge } from 'react-icons/bi';
import styles from './DetailPost.module.scss';

const cx = classNames.bind(styles);

function DetailPost({ post }) {
    const user = post.userInfo;
    return (
        <div className={cx('current-post')}>
            <div className={cx('top-info')}>
                <div className={cx('current-user')}>
                    <img className={cx('current-avatar')} src={user.image} alt={user.fullName} />
                    <h3 className={cx('current-name')}>{user.fullName}</h3>
                </div>
                <div className={cx('current-reaction')}>
                    <MdAddReaction />
                    <span className={cx('current-number-reaction')}>{post.reactions}</span>
                </div>
            </div>
            <h1 className={cx('post-title')}>{post.title}</h1>
            <p className={cx('post-body')}>{post.body}</p>
            <div className={cx('tags')}>
                <span>Tags:&nbsp;</span>
                {post.tags.map((item, index) => (
                    <li className={cx('tag-item')} key={index}>
                        #{item}
                    </li>
                ))}
            </div>
            <div className={cx('full-info')}>
                <img className={cx('big-avatar')} src={user.image} alt={user.fullName} />
                <div className={cx('user-info')}>
                    <div className={cx('info-box')}>
                        <BiSolidUserCircle />
                        <p className={cx('info')}>{user.username || 'lskeelv'}</p>
                    </div>
                    <div className={cx('info-box')}>
                        <BiSolidUserBadge />
                        <p className={cx('info')}>{user.fullName}</p>
                    </div>
                    <div className={cx('info-box')}>
                        <BiCalendar />
                        <p className={cx('info')}>{user.birthDate || '1978-04-26'}</p>
                    </div>
                    <div className={cx('info-box')}>
                        <BsTelephoneFill />
                        <p className={cx('info')}>{user.phone || '+1 813 801 4535'}</p>
                    </div>
                    <div className={cx('info-box')}>
                        <MdEmail />
                        <p className={cx('info')}>{user.email || 'lskeelv@webeden.co.uk'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPost;
