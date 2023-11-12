import styles from './dashboard.module.scss'
import Sidebar from '../ui/dashboard/sidebar'
import Navbar from '../ui/dashboard/navbar'
import Footer from '../ui/dashboard/footer'

function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__menu}>
        <Sidebar />
      </div>
      <div className={styles.dashboard__content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout