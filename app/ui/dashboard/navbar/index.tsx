"use client"
import { usePathname } from 'next/navigation'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import styles from './navbar.module.scss'

function Navbar():JSX.Element {
  const pathname = usePathname()
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__title}>{pathname.split("/").pop()}</div>
      <div className={styles.navbar__menu}>
        <div className={styles.navbar__search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.navbar__input} />
        </div>
        <div className={styles.navbar__icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar