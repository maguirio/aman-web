import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Messages.module.css'

const conversations = [
  { id: 1, name: 'Aisha K.', age: 25, photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces', last: 'JazakAllahu khairan for the intro...', time: '2h ago', unread: 2 },
  { id: 2, name: 'Mariam H.', age: 28, photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=faces', last: 'Yes of course, I would love to...', time: 'Yesterday', unread: 0 },
  { id: 3, name: 'Zainab M.', age: 26, photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=faces', last: 'Inshallah next week works for me', time: '2 days ago', unread: 0 },
]

export default function Messages() {
  return (
    <>
      <Head>
        <title>Messages — Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className="wordmark-small">Messages</div>
        </div>
        <div className={styles.list}>
          {conversations.map((c) => (
            <Link href={`/chat/${c.id}`} key={c.id} className="list-item">
              <div style={{ position: 'relative' }}>
                <img src={c.photo} alt={c.name} className="avatar avatar-md" />
                {c.unread > 0 && (
                  <div style={{ position: 'absolute', top: -2, right: -2, width: 18, height: 18, background: 'var(--rose-pink)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: 'white' }}>{c.unread}</div>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, color: 'var(--navy)' }}>{c.name}, {c.age}</span>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, color: 'var(--muted)' }}>{c.time}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: c.unread > 0 ? 'var(--navy)' : 'var(--muted)', fontWeight: c.unread > 0 ? 500 : 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.last}</p>
              </div>
            </Link>
          ))}
        </div>
        <BottomNav current="messages" />
      </div>
    </>
  )
}

function BottomNav({ current }: { current: string }) {
  const items = [
    { id: 'discover', label: 'Discover', href: '/discovery', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="7" stroke={current === 'discover' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4"/><path d="M11 4V7M11 15V18M4 11H7M15 11H18" stroke={current === 'discover' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { id: 'matches', label: 'Matches', href: '/matches', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4L18 18M4 18L18 4" stroke={current === 'matches' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { id: 'messages', label: 'Messages', href: '/messages', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4H18V14H12L8 18V14H4V4Z" stroke={current === 'messages' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinejoin="round"/></svg> },
    { id: 'profile', label: 'Profile', href: '/profile', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke={current === 'profile' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4"/><path d="M4 19C4 15 7 13 11 13C15 13 18 15 18 19" stroke={current === 'profile' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/></svg> },
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
