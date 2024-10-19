import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItemPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountItemPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="http://localhost:3000/static/media/avatar.f3118499bc2405361f02.jpeg"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('username')}>
                    <span>colacola</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>colacola</span>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>10.2M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>10.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountItemPreview;
