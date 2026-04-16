import Head from 'next/head'
import Link from 'next/link'

const MATCHES = [
  { id: 1, name: 'Aisha K.', age: 25, city: 'Toronto, ON', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces', verified: true, status: 'Pending your response', statusType: 'rose' },
  { id: 2, name: 'Mariam H.', age: 28, city: 'Montreal, QC', photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=faces', verified: false, status: 'Waiting on them', statusType: 'muted' },
  { id: 3, name: 'Zainab M.', age: 26, city: 'Laval, QC', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=faces', verified: true, status: 'Ready to connect', statusType: 'sage' },
  { id: 4, name: 'Omar B.', age: 30, city: 'Montreal, QC', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', verified: true, status: 'Pending your response', statusType: 'rose' },
  { id: 5, name: 'Layla S.', age: 24, city: 'Ottawa, ON', photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=faces', verified: false, status: 'Waiting on them', statusType: 'muted' },
]

export default function Matches() {
  return (
    <>
      <Head>
        <title>Matches — Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className="phone-frame">
        <div className="status-bar">
          <span>9:41</span>
          <div className="status-bar-icons">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 4.5C1 3.4 1.9 2.5 3 2.5H4.5C5.6 2.5 6.5 3.4 6.5 4.5V10.5H1V4.5Z" stroke="#0F172A" strokeWidth="1.2"/><path d="M6.5 6H11.5C12.6 6 13.5 5.1 13.5 4V4.5" stroke="#0F172A" strokeWidth="1.2"/><path d="M11.5 2.5H14.5C15.6 2.5 16.5 3.4 16.5 4.5V10.5" stroke="#0F172A" strokeWidth="1.2"/></svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 2.5C10.5 2.5 12.5 1.5 12.5 0.5H3.5C3.5 1.5 5.5 2.5 8 2.5Z" stroke="#0F172A" strokeWidth="1.2" fill="none"/><path d="M1.5 5.5V7C1.5 9.5 4 11 8 11C12 11 14.5 9.5 14.5 7V5.5" stroke="#0F172A" strokeWidth="1.2"/></svg>
          </div>
        </div>
        <div className="header" style={{ justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="wordmark-small">Aman</div>
            <div className="discovery-label">Your Matches</div>
          </div>
        </div>
        <div className="tabs">
          <button className="tab active">Matches</button>
          <button className="tab">Favorites</button>
          <button className="tab">Visited</button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {MATCHES.map(m => (
            <Link href={`/match-detail?id=${m.id}`} key={m.id} className="list-item">
              <div style={{ position: 'relative' }}>
                <img src={m.photo} alt={m.name} className="avatar avatar-md" />
                {m.verified && (
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 14, height: 14, background: 'var(--success)', borderRadius: '50%', border: '2px solid var(--ivory)' }} />
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, color: 'var(--navy)', marginBottom: 2 }}>{m.name}, {m.age}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--sage-light)' }}>{m.city}</div>
              </div>
              <span className={`badge badge-${m.statusType === 'rose' ? 'rose' : m.statusType === 'sage' ? 'sage' : 'sage'}`}>{m.status}</span>
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
    { id: 'discover', href: '/discovery', label: 'Discover', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="7" stroke={current === 'discover' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4"/><path d="M11 4V7M11 15V18M4 11H7M15 11H18" stroke={current === 'discover' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { id: 'matches', href: '/matches', label: 'Matches', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4L18 18M4 18L18 4" stroke={current === 'matches' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { id: 'messages', href: '/messages', label: 'Messages', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4H18V14H12L8 18V14H4V4Z" stroke={current === 'messages' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinejoin="round"/></svg> },
    { id: 'profile', href: '/my-profile', label: 'Profile', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke={current === 'profile' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4"/><path d="M4 19C4 15 7 13 11 13C15 13 18 15 18 19" stroke={current === 'profile' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/></svg> },
  ]
  return <div className="bottom-nav">{items.map(item => <Link href={item.href} key={item.id}><div className={`nav-item ${current === item.id ? 'active' : ''}`}>{item.icon}<span className="nav-item-label">{item.label}</span></div></Link>)}</div>
}
