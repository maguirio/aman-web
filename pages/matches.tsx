import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Matches.module.css'

const matches = [
  { id: 1, name: 'Aisha K.', age: 25, city: 'Toronto, ON', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces', verified: true, status: 'Pending your response' },
  { id: 2, name: 'Mariam H.', age: 28, city: 'Montreal, QC', photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=faces', verified: false, status: 'Waiting on them' },
  { id: 3, name: 'Zainab M.', age: 26, city: 'Laval, QC', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces', verified: true, status: 'Ready to connect' },
  { id: 4, name: 'Omar B.', age: 30, city: 'Montreal, QC', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces', verified: true, status: 'Pending your response' },
]

export default function Matches() {
  return (
    <>
      <Head>
        <title>Matches — Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className="wordmark-small">Aman</div>
        </div>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.active}`}>Matches</button>
          <button className={styles.tab}>Favorites</button>
          <button className={styles.tab}>Visited</button>
        </div>
        <div className={styles.list}>
          {matches.map((m) => (
            <Link href={`/profile/${m.id}`} key={m.id} className="list-item">
              <div style={{ position: 'relative' }}>
                <img src={m.photo} alt={m.name} className="avatar avatar-md" />
                {m.verified && (
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 14, height: 14, background: 'var(--success)', borderRadius: '50%', border: '2px solid var(--ivory)' }} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, color: 'var(--navy)', marginBottom: 2 }}>{m.name}, {m.age}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--sage-light)' }}>{m.city}</div>
              </div>
              <span className={`badge badge-sage`}>{m.status}</span>
            </Link>
          ))}
        </div>
        <BottomNav current="matches" />
      </div>
    </>
  )
}

function BottomNav({ current }: { current: string }) {
  const items = [
    { id: 'discover', label: 'Discover', href: '/discovery', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7" stroke={current === 'discover' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4"/>
        <path d="M11 4V7M11 15V18M4 11H7M15 11H18" stroke={current === 'discover' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    )},
    { id: 'matches', label: 'Matches', href: '/matches', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4L18 18M4 18L18 4" stroke={current === 'matches' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    )},
    { id: 'messages', label: 'Messages', href: '/messages', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4H18V14H12L8 18V14H4V4Z" stroke={current === 'messages' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    )},
    { id: 'profile', label: 'Profile', href: '/profile', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke={current === 'profile' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4"/>
        <path d="M4 19C4 15 7 13 11 13C15 13 18 15 18 19" stroke={current === 'profile' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    )},
  ]

  return (
    <div className="bottom-nav">
      {items.map((item) => (
        <Link href={item.href} key={item.id}>
          <div className={`nav-item ${current === item.id ? 'active' : ''}`}>
            {item.icon}
            <span className="nav-item-label">{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
