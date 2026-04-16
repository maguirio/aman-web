import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Splash() {
  const router = useRouter()

  useEffect(() => {
    const t = setTimeout(() => router.replace('/welcome'), 2000)
    return () => clearTimeout(t)
  }, [router])

  return (
    <>
      <Head>
        <title>Aman</title>
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

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(812px - 44px)', padding: '60px 32px', position: 'relative' }}>
          {/* Animated logo */}
          <div style={{ marginBottom: 20, animation: 'fadeIn 0.8s ease-out' }}>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="46" stroke="var(--gold)" strokeWidth="2" strokeDasharray="4 6" opacity="0.5">
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite"/>
              </circle>
              <circle cx="50" cy="50" r="36" stroke="var(--rose-pink)" strokeWidth="2" opacity="0.3">
                <animate attributeName="r" values="36;40;36" dur="3s" repeatCount="indefinite"/>
              </circle>
              <text x="50" y="58" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="36" fontWeight="700" fill="#E84C77">A</text>
            </svg>
          </div>

          <div className="wordmark" style={{ letterSpacing: 8, marginBottom: 12 }}>Aman</div>

          {/* Star decoration */}
          <div style={{ marginBottom: 16 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L9.5 6H15L10.5 9L12 14L8 11L4 14L5.5 9L1 6H6.5L8 1Z" fill="#C9A84C" opacity="0.7"/>
            </svg>
          </div>

          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--muted)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 40 }}>
            Find your halal match
          </div>

          {/* Loading dots */}
          <div style={{ display: 'flex', gap: 8 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--rose-pink)', animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite` }} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1); } }
      `}</style>
    </>
  )
}
