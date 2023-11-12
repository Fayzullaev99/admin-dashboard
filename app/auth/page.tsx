import SignInForm from '../ui/auth/signIn'
import styles from './login.module.scss'

function AuthPage() {
  return (
    <div className={styles.container}>
      <SignInForm/>
    </div>
  )
}

export default AuthPage