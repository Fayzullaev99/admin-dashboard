import styles from './footer.module.scss'

function Footer():JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>Sanjar Administrator</div>
      <div className={styles.footer__text}>© All rights reserved.</div>
    </footer>
  )
}

export default Footer