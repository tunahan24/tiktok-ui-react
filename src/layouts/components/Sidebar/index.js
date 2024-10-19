import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, FollowingIcon, LiveIcon } from '~/components/Icons';
import styles from './Sidebar.module.scss';
import SuggestAccounts from '~/components/SuggestAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>

            <SuggestAccounts label="Suggested accounts" />
            <SuggestAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
