import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Auth.module.css'

export default function SignUp() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ email: '', password: '', name: '', gender: '' })

  return (
    <>
      <Head>
        <title>Sign Up — Aman</title>
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
          {step === 1 && (
            <>
              <h1 className={styles.title}>Create account</h1>
              <p className={styles.subtitle}>Join 10,000+ Muslims finding their halal partner</p>
              <div className={styles.inputGroup}>
                <label className="input-label">Full name</label>
                <input className="input-field" type="text" placeholder="e.g. Fatima Hassan" />
              </div>
              <div className={styles.inputGroup}>
                <label className="input-label">Email address</label>
                <input className="input-field" type="email" placeholder="your@email.com" />
              </div>
              <div className={styles.inputGroup}>
                <label className="input-label">Password</label>
                <input className="input-field" type="password" placeholder="At least 8 characters" />
              </div>
              <button className="btn-primary btn-primary-rose" onClick={() => setStep(2)}>Continue</button>
              <p className={styles.terms}>By continuing, you agree to our <Link href="/terms">Terms</Link> & <Link href="/privacy">Privacy Policy</Link></p>
            </>
          )}
          {step === 2 && (
            <>
              <h1 className={styles.title}>I am a...</h1>
              <p className={styles.subtitle}>This is how other members will see you</p>
              <div className={styles.genderCards}>
                <button className={styles.genderCard}>
                  <div className={styles.genderIcon}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="15" r="8" stroke="#6B7B6B" strokeWidth="1.5"/>
                      <path d="M8 35C8 28 13 24 20 24C27 24 32 28 32 35" stroke="#6B7B6B" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>Woman</span>
                </button>
                <button className={styles.genderCard}>
                  <div className={styles.genderIcon}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="15" r="8" stroke="#6B7B6B" strokeWidth="1.5"/>
                      <path d="M8 35C8 28 13 24 20 24C27 24 32 28 32 35" stroke="#6B7B6B" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M14 18V32M14 32L18 28M14 32L10 28" stroke="#6B7B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Man</span>
                </button>
              </div>
              <button className="btn-primary" onClick={() => setStep(3)}>Continue</button>
            </>
          )}
          {step === 3 && (
            <>
              <h1 className={styles.title}>Verify your identity</h1>
              <p className={styles.subtitle}>A verification code has been sent to your email</p>
              <div className={styles.otpInputs}>
                {[...Array(6)].map((_, i) => (
                  <input key={i} className={styles.otpInput} type="text" maxLength={1} />
                ))}
              </div>
              <button className="btn-primary btn-primary-rose">Verify</button>
              <button className="btn-ghost">Resend code</button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
