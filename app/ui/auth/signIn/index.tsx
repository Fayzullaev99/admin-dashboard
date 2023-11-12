"use client";
import { useFormState } from "react-dom";
import styles from './signin.module.scss'
function SignInForm() {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.signin__form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  )
}

export default SignInForm