import Head from 'next/head'
import Link from 'next/link'

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Aman — Find your spouse the halal way</title>
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

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(812px - 44px)', padding: '60px 32px 40px' }}>
          {/* Hero Icon */}
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 40, color: 'var(--sage)' }}>
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" stroke="var(--sage)" strokeWidth="1.5" fill="none"/>
            <path d="M9 12l2 2 4-4" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--navy)', textAlign: 'center', marginBottom: 20, lineHeight: 1.3 }}>
            Find your spouse<br />the halal way
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--muted)', textAlign: 'center', maxWidth: 300, lineHeight: 1.6, marginBottom: 48 }}>
            Serious about marriage? Aman connects you with Muslims who share your values, deen, and vision for family — the right way.
          </p>

          <Link href="/signup" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', padding: '16px 24px', background: 'var(--sage)', color: 'var(--pure-white)', borderRadius: 16, fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600, textDecoration: 'none', marginBottom: 12, boxShadow: 'var(--btn-shadow)' }}>
            Create Account
          </Link>
          <Link href="/login" style={{ padding: '14px 16px', background: 'transparent', color: 'var(--sage)', border: '1.5px solid var(--border)', borderRadius: 16, fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 500, textDecoration: 'none', width: '100%', textAlign: 'center' }}>
            I already have an account
          </Link>
        </div>

        {/* Bottom tagline */}
        <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--muted)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--sage)' }}>
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" stroke="var(--sage)" strokeWidth="1.5" fill="none"/>
          </svg>
          Halal • Serious • Family-First
        </div>
      </div>
    </>
  )
}
