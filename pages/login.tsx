import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Auth.module.css'

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In — Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className={styles.page}>
        <div className={styles.header}>
          <Link href="/welcome" className="back-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="#6B7B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className="wordmark-small">Aman</div>
          <div style={{ width: 36 }} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Sign in to continue your search</p>
          <div className={styles.inputGroup}>
            <label className="input-label">Email address</label>
            <input className="input-field" type="email" placeholder="your@email.com" />
          </div>
          <div className={styles.inputGroup}>
            <label className="input-label">Password</label>
            <input className="input-field" type="password" placeholder="Your password" />
          </div>
          <button className="btn-primary btn-primary-rose">Sign In</button>
          <p style={{ textAlign: 'center', marginTop: 8 }}>
            <Link href="/forgot-password" className="btn-ghost">Forgot password?</Link>
          </p>
          <p className={styles.terms}>Don&apos;t have an account? <Link href="/signup">Sign up</Link></p>
        </div>
      </div>
    </>
  )
}
