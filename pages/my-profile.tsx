import Head from 'next/head'
import Link from 'next/link'

const ME = {
  name: 'Yusuf M.',
  age: 30,
  city: 'Montreal, QC',
  verified: true,
  photos: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
  ],
  bio: "Electrical engineer turned entrepreneur. I run an HVAC business. My family is originally from Morocco and we're quite traditional. Looking for someone serious about deen and building a life together, Inshallah.",
  signals: ['Prays 5x Daily', 'Business Owner', 'Hajj 2023', 'Halal Eater', 'Family Linked'],
  timeline: 'Within 3 months',
  height: '183 cm',
  occupation: 'Business Owner — HVAC',
  education: 'B.Eng Electrical Engineering',
  languages: ['English', 'French', 'Arabic'],
  introRequests: 12,
  profileViews: 47,
  saves: 8,
}

export default function MyProfile() {
  return (
    <>
      <Head>
        <title>My Profile — Aman</title>
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
        <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100 }}>
          {/* Header */}
          <div className="header" style={{ borderBottom: 'none' }}>
            <div style={{ width: 36 }} />
            <div style={{ textAlign: 'center' }}>
              <div className="wordmark-small">Aman</div>
              <div className="discovery-label">My Profile</div>
            </div>
            <Link href="/edit-profile" style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.5 3L17 5.5L7.5 15H5V12.5L14.5 3Z" stroke="#6B7B6B" strokeWidth="1.4" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Photo Grid */}
          <div style={{ padding: '0 24px 20px', background: 'var(--ivory)' }}>
            <div className="photo-grid">
              {ME.photos.map((p, i) => (
                <div key={i} className="photo-grid-item" style={{ borderRadius: i === 0 ? '16px' : '8px' }}>
                  <img src={p} alt={`Photo ${i + 1}`} />
                </div>
              ))}
              <div className="photo-add" style={{ borderRadius: '8px' }}>+</div>
            </div>
          </div>

          {/* Profile Info */}
          <div style={{ padding: '0 24px', background: 'var(--ivory)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div className="profile-name">{ME.name}, {ME.age}</div>
              {ME.verified && (
                <div className="trust-badge" style={{ position: 'static' }}>
                  <div className="trust-badge-icon">
                    <svg viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Sheikh Verified</span>
                </div>
              )}
            </div>
            <div className="profile-meta" style={{ marginBottom: 16 }}>
              <span className="profile-city">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M6 13C6 13 1 8.5 1 4.5C1 2.01 3.01 0 6 0C8.99 0 11 2.01 11 4.5C11 8.5 6 13 6 13Z" stroke="#8A9A8A" strokeWidth="1.3" fill="none"/>
                  <circle cx="6" cy="4.5" r="1.8" stroke="#8A9A8A" strokeWidth="1.3" fill="none"/>
                </svg>
                {ME.city}
              </span>
            </div>
            <p className="bio">{ME.bio}</p>
            <div className="deen-signals" style={{ marginBottom: 16 }}>
              {ME.signals.map(s => (
                <span key={s} className="deen-chip">{s}</span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{ padding: '20px 24px', display: 'flex', gap: 12 }}>
            <div className="stat-card">
              <div className="stat-value">{ME.introRequests}</div>
              <div className="stat-label">Intro Requests</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{ME.profileViews}</div>
              <div className="stat-label">Profile Views</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{ME.saves}</div>
              <div className="stat-label">Saves</div>
            </div>
          </div>

          {/* Details */}
          <div style={{ padding: '0 24px 20px', background: 'var(--ivory)' }}>
            <div className="card">
              <div className="info-row" style={{ padding: '14px 20px' }}>
                <span className="info-row-label">Height</span>
                <span className="info-row-value">{ME.height}</span>
              </div>
              <div className="info-row" style={{ padding: '14px 20px' }}>
                <span className="info-row-label">Occupation</span>
                <span className="info-row-value">{ME.occupation}</span>
              </div>
              <div className="info-row" style={{ padding: '14px 20px' }}>
                <span className="info-row-label">Education</span>
                <span className="info-row-value">{ME.education}</span>
              </div>
              <div className="info-row" style={{ padding: '14px 20px' }}>
                <span className="info-row-label">Languages</span>
                <span className="info-row-value">{ME.languages.join(', ')}</span>
              </div>
              <div className="info-row" style={{ padding: '14px 20px' }}>
                <span className="info-row-label">Marriage Timeline</span>
                <span className="info-row-value">{ME.timeline}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ padding: '0 24px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link href="/edit-profile" className="btn-primary" style={{ background: 'var(--sage)', textDecoration: 'none' }}>Edit Profile</Link>
            <Link href="/settings" className="btn-secondary" style={{ textDecoration: 'none' }}>Account Settings</Link>
          </div>
        </div>

        <BottomNav current="profile" />
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
