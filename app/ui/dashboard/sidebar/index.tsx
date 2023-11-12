import { ReactElement } from 'react';
import Image from 'next/image';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md';
import styles from './sidebar.module.scss';
import MenuLink from './menuLink';

type MenuItem = {
  title: string;
  path: string;
  icon: ReactElement;
};

type MenuSection = {
  title: string;
  list: MenuItem[];
};


const menuItems: MenuSection[] = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];

function Sidebar(): JSX.Element {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__user}>
        <Image src="/user.JPG" alt="" width={50} height={50} className={styles.sidebar__userImage} />
        <div className={styles.sidebar__userDetail}>
          <span className={styles.sidebar__userName}>Sanjar Fayzullaev</span>
          <span className={styles.sidebar__userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.sidebar__list}>
        {menuItems.map((item) => (
          <li key={item.title} className={styles.sidebar__item}>
            <span>{item.title}</span>
            {item.list.map((link) => (
              <MenuLink key={link.title} item={link} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.sidebar__logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
