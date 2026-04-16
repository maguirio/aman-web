import Head from 'next/head'
import styles from '../styles/Splash.module.css'

export default function Splash() {
  return (
    <>
      <Head>
        <title>Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className={styles.splash}>
        <div className={styles.logo}>Aman</div>
        <div className={styles.tagline}>Find your halal match</div>
        <div className={styles.decorative}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M30 10L33 25H47L36 34L39 49L30 40L21 49L24 34L13 25H27L30 10Z" stroke="#C9A84C" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>
    </>
  )
}
