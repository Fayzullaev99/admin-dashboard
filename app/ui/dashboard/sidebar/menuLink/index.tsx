"use client"
import { ReactElement } from 'react';
import Link from 'next/link';
import styles from './menulink.module.scss';
import { usePathname } from 'next/navigation';

type MenuLinkProps = {
  item: {
    title: string;
    path: string;
    icon: ReactElement;
  };
};

function MenuLink({ item }: MenuLinkProps): JSX.Element {
  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${styles.menu} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLink;
