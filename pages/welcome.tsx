import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Welcome.module.css'

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Welcome — Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.logo}>Aman</div>
          <div className={styles.heroImage}>
            <img src="https://images.unsplash.com/photo-1604006852748-903f48cb5128?w=500&h=600&fit=crop" alt="Couple" />
            <div className={styles.heroOverlay} />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.headline}>Where marriage begins with du'as</h1>
          <p className={styles.subheadline}>A halal space for Muslims who believe finding a spouse is an act of worship.</p>
          <Link href="/signup">
            <button className="btn-primary btn-primary-rose">Get Started</button>
          </Link>
          <Link href="/discovery">
            <button className="btn-secondary btn-secondary-rose">See who&apos;s here</button>
          </Link>
          <p className={styles.loginLink}>Already have an account? <Link href="/login">Sign in</Link></p>
        </div>
      </div>
    </>
  )
}
