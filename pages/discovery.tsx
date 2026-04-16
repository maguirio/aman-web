import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Discovery.module.css'

const profiles = [
  {
    id: 1,
    name: 'Fatima R.',
    age: 27,
    city: 'Montreal, QC',
    photos: ['https://images.unsplash.com/photo-1580477397269-d9c779e0f3a7?w=600&h=750&fit=crop&crop=faces'],
    verified: true,
    signals: ['Prays 5x Daily', 'Hijabi', 'Al-Quran', 'Family Involved'],
    bio: "I'm a nursing student with a calm presence and an active duas practice. I value family, sincerity in worship, and building genuine connections grounded in deen.",
    timeline: { label: 'Ready for marriage', value: 'Within 1 year' },
  },
  {
    id: 2,
    name: 'Aisha K.',
    age: 25,
    city: 'Toronto, ON',
    photos: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=750&fit=crop&crop=faces'],
    verified: true,
    signals: ['Prays 5x Daily', 'Revert', 'Halal eater'],
    bio: "Revert of 3 years alhamdulillah. Working in tech, love hiking and reading seerah. Looking for someone on a similar deen journey.",
    timeline: { label: 'Ready for marriage', value: 'Within 6 months' },
  },
  {
    id: 3,
    name: 'Yusuf M.',
    age: 30,
    city: 'Laval, QC',
    photos: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=faces'],
    verified: false,
    signals: ['Prays 5x Daily', 'Hajj 2023', 'Business owner'],
    bio: "Electrical engineer turned entrepreneur. I run a small HVAC business. My family is originally from Morocco and we're quite traditional.",
    timeline: { label: 'Ready for marriage', value: 'Within 1 year' },
  },
]

export default function Discovery() {
  return (
    <>
      <Head>
        <title>Discover — Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className={styles.page}>
        {/* Header */}
        <div className={styles.header}>
          <div className="wordmark">Aman</div>
          <div className="discovery-label">Discover</div>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <div className="chip active">All</div>
          <div className="chip">Practicing</div>
          <div className="chip">Revert</div>
          <div className="chip">My City</div>
          <div className="chip">Family Linked</div>
        </div>

        {/* Profile Card */}
        <div className={styles.cardArea}>
          {profiles.map((profile) => (
            <div key={profile.id} className="card">
              <div className={styles.photoContainer}>
                <img className={styles.photo} src={profile.photos[0]} alt={profile.name} />
                <div className={styles.photoGradient} />
                {profile.verified && (
                  <div className={styles.trustBadge}>
                    <div className="trust-badge-icon">
                      <svg viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Sheikh Verified</span>
                  </div>
                )}
              </div>
              <div className={styles.cardContent}>
                <div className={styles.profileName}>{profile.name}, {profile.age}</div>
                <div className={styles.profileMeta}>
                  <span className={styles.profileCity}>
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path d="M6 13C6 13 1 8.5 1 4.5C1 2.01 3.01 0 6 0C8.99 0 11 2.01 11 4.5C11 8.5 6 13 6 13Z" stroke="#8A9A8A" strokeWidth="1.3"/>
                      <circle cx="6" cy="4.5" r="1.8" stroke="#8A9A8A" strokeWidth="1.3"/>
                    </svg>
                    {profile.city}
                  </span>
                </div>
                <div className={styles.deenSignals}>
                  {profile.signals.map((signal) => (
                    <span key={signal} className="chip" style={{ fontSize: 11, padding: '5px 10px' }}>{signal}</span>
                  ))}
                </div>
                <div className={styles.bio}>{profile.bio}</div>
                <div className="timeline-row">
                  <div className="timeline-icon">
                    <svg viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="7" stroke="#6B7B6B" strokeWidth="1.5"/>
                      <path d="M10 6V10L12.5 12.5" stroke="#6B7B6B" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="timeline-text">
                    <div className="timeline-label">{profile.timeline.label}</div>
                    <div className="timeline-value">{profile.timeline.value}</div>
                  </div>
                </div>
                <button className="btn-primary">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 16.5C12.73 16.5 15.75 13.485 15.75 9.75C15.75 6.015 12.73 3 9 3C5.27 3 2.25 6.015 2.25 9.75C2.25 13.485 5.27 16.5 9 16.5Z" stroke="white" strokeWidth="1.4"/>
                    <path d="M6 9.75L8.5 12L12 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Request Introduction
                </button>
                <div className={styles.secondaryActions}>
                  <button className="btn-secondary">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M2 2L13 13M13 2L2 13" stroke="#6B7B6B" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                    Not right now
                  </button>
                  <button className="btn-secondary">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M7.5 13.5L2 8L4 6L7.5 9.5L11 5L13 7L7.5 13.5Z" stroke="#6B7B6B" strokeWidth="1.3" strokeLinejoin="round"/>
                    </svg>
                    Save for later
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hint */}
        <div className={styles.bottomHint}>
          Requests are typically responded to within 24 hours
        </div>

        {/* Bottom Nav */}
        <BottomNav current="discover" />
      </div>
    </>
  )
}

function BottomNav({ current }: { current: string }) {
  const items = [
    { id: 'discover', label: 'Discover', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7" stroke={current === 'discover' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4"/>
        <path d="M11 4V7M11 15V18M4 11H7M15 11H18" stroke={current === 'discover' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    )},
    { id: 'matches', label: 'Matches', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4L18 18M4 18L18 4" stroke="#9CA3AF" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    )},
    { id: 'messages', label: 'Messages', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4H18V14H12L8 18V14H4V4Z" stroke="#9CA3AF" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    )},
    { id: 'profile', label: 'Profile', icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="#9CA3AF" strokeWidth="1.4"/>
        <path d="M4 19C4 15 7 13 11 13C15 13 18 15 18 19" stroke="#9CA3AF" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    )},
  ]

  return (
    <div className="bottom-nav">
      {items.map((item) => (
        <Link href={item.id === 'discover' ? '/discovery' : `/${item.id}`} key={item.id}>
          <div className={`nav-item ${current === item.id ? 'active' : ''}`}>
            {item.icon}
            <span className="nav-item-label">{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
