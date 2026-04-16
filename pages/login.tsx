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
      <div className="phone-frame">
        {/* Notch */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 150, height: 30, background: 'var(--ivory)', borderRadius: '0 0 20px 20px', zIndex: 10 }} />

        <div className="status-bar">
          <span style={{ fontWeight: 600 }}>9:41</span>
          <div className="status-bar-icons">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
              <path d="M1 4.5C1 3.67 1.67 3 2.5 3H3.5C4.33 3 5 3.67 5 4.5V10.5C5 11.33 4.33 12 3.5 12H2.5C1.67 12 1 11.33 1 10.5V4.5Z" stroke="#0F172A" strokeWidth="1.2"/>
              <path d="M6 3L6 10.5C6 11.33 6.67 12 7.5 12C8.33 12 9 11.33 9 10.5L9 3L10.5 2L11.5 3" stroke="#0F172A" strokeWidth="1.2" strokeLinejoin="round"/>
              <rect x="11" y="1" width="5" height="8" rx="1.5" stroke="#0F172A" strokeWidth="1.2"/>
            </svg>
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
              <path d="M7.5 11C10.26 11 12.5 8.76 12.5 6C12.5 3.24 10.26 1 7.5 1C4.74 1 2.5 3.24 2.5 6C2.5 8.76 4.74 11 7.5 11Z" stroke="#0F172A" strokeWidth="1.2"/>
              <path d="M1 10.5H4M11 10.5H14" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="header" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <Link href="/welcome" className="back-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="#6B7B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div className="wordmark-small">Aman</div>
          </div>
          <div style={{ width: 36 }} />
        </div>

        <div style={{ padding: '32px 24px 40px', flex: 1 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>Welcome back</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--muted)', marginBottom: 32, lineHeight: 1.6 }}>Sign in to continue your search</p>

          <div className="input-group">
            <label className="input-label">Email address</label>
            <input className="input-field" type="email" placeholder="your@email.com" />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input className="input-field" type="password" placeholder="Your password" />
          </div>

          <button className="btn-primary btn-primary-rose" style={{ boxShadow: 'var(--btn-shadow-rose)' }}>
            Sign In
          </button>

          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <Link href="/forgot-password" className="btn-ghost">Forgot password?</Link>
          </div>

          <div className="divider" style={{ margin: '24px 0' }}>
            <div className="divider-line" />
            <span className="divider-text">or</span>
            <div className="divider-line" />
          </div>

          <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--muted)' }}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" style={{ color: 'var(--rose-pink)', textDecoration: 'none', fontWeight: 500 }}>Sign up</Link>
          </p>
        </div>
      </div>
    </>
  )
}
