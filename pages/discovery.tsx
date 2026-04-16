import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const MOCK_PROFILES = [
  {
    id: 1,
    name: 'Fatima R.',
    age: 27,
    city: 'Montreal, QC',
    verified: true,
    photos: ['https://images.unsplash.com/photo-1580477397269-d9c779e0f3a7?w=600&h=750&fit=crop&crop=faces'],
    signals: ['Prays 5x Daily', 'Hijabi', 'Al-Quran', 'Family Involved'],
    bio: "Nursing student with a calm presence and active duas practice. I value family, sincerity in worship, and building genuine connections grounded in deen.",
    timeline: 'Within 1 year',
  },
  {
    id: 2,
    name: 'Aisha K.',
    age: 25,
    city: 'Toronto, ON',
    verified: true,
    photos: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=750&fit=crop&crop=faces'],
    signals: ['Prays 5x Daily', 'Revert', 'Halal Eater'],
    bio: "Revert of 3 years alhamdulillah. Working in tech, love hiking and reading seerah. Looking for someone on a similar deen journey.",
    timeline: 'Within 6 months',
  },
  {
    id: 3,
    name: 'Mariam H.',
    age: 29,
    city: 'Laval, QC',
    verified: false,
    photos: ['https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=750&fit=crop&crop=faces'],
    signals: ['Prays 5x Daily', 'Hajj 2022', 'Halal Eater'],
    bio: " Elementary teacher, love kids and cooking. My family is from Morocco like yours. Looking for someone serious about deen and building a home together.",
    timeline: 'Within 1 year',
  },
  {
    id: 4,
    name: 'Yusuf M.',
    age: 30,
    city: 'Montreal, QC',
    verified: true,
    photos: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=faces'],
    signals: ['Prays 5x Daily', 'Business Owner', 'Hajj 2023'],
    bio: "Electrical engineer turned entrepreneur. I run an HVAC business. Family is originally from Morocco and we're quite traditional. Ready to build something real.",
    timeline: 'Within 3 months',
  },
]

const FILTERS = ['All', 'Practicing', 'Revert', 'My City', 'Family Linked']

export default function Discovery() {
  const [current, setCurrent] = useState(0)
  const [activeFilter, setActiveFilter] = useState('All')
  const [saved, setSaved] = useState<number[]>([])
  const [showRequest, setShowRequest] = useState(false)

  const profile = MOCK_PROFILES[current]

  const nextProfile = () => {
    if (current < MOCK_PROFILES.length - 1) {
      setCurrent(c => c + 1)
    }
  }

  const handleSave = () => {
    setSaved(s => [...s, MOCK_PROFILES[current].id])
    nextProfile()
  }

  const handleRequest = () => {
    setShowRequest(true)
  }

  return (
    <>
      <Head>
        <title>Discover — Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className="phone-frame">
        {/* Status Bar */}
        <div className="status-bar">
          <span>9:41</span>
          <div className="status-bar-icons">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M1 4.5C1 3.4 1.9 2.5 3 2.5H4.5C5.6 2.5 6.5 3.4 6.5 4.5V10.5H1V4.5Z" stroke="#0F172A" strokeWidth="1.2"/>
              <path d="M6.5 6H11.5C12.6 6 13.5 5.1 13.5 4V4.5" stroke="#0F172A" strokeWidth="1.2"/>
              <path d="M11.5 2.5H14.5C15.6 2.5 16.5 3.4 16.5 4.5V10.5" stroke="#0F172A" strokeWidth="1.2"/>
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M8 2.5C10.5 2.5 12.5 1.5 12.5 0.5H3.5C3.5 1.5 5.5 2.5 8 2.5Z" stroke="#0F172A" strokeWidth="1.2" fill="none"/>
              <path d="M1.5 5.5V7C1.5 9.5 4 11 8 11C12 11 14.5 9.5 14.5 7V5.5" stroke="#0F172A" strokeWidth="1.2"/>
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="header">
          <div style={{ width: 36 }} />
          <div>
            <div className="wordmark">Aman</div>
            <div className="discovery-label">Discover</div>
          </div>
          <Link href="/settings" style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#6B7B6B" strokeWidth="1.4"/>
              <path d="M3.5 17C4.5 14.5 6.5 12.5 10 12.5C13.5 12.5 15.5 14.5 16.5 17" stroke="#6B7B6B" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>

        {/* Filters */}
        <div className="filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`chip ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Card Area */}
        <div style={{ flex: 1, padding: '16px 24px', overflowY: 'auto' }}>
          <div className="card">
            <div className="photo-container">
              <img className="photo" src={profile.photos[0]} alt={profile.name} />
              <div className="photo-gradient" />
              {profile.verified && (
                <div className="trust-badge">
                  <div className="trust-badge-icon">
                    <svg viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Sheikh Verified</span>
                </div>
              )}
              <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
                <div className="profile-name" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)', color: 'white' }}>
                  {profile.name}, {profile.age}
                </div>
                <div className="profile-city" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M6 13C6 13 1 8.5 1 4.5C1 2.01 3.01 0 6 0C8.99 0 11 2.01 11 4.5C11 8.5 6 13 6 13Z" stroke="white" strokeWidth="1.3" fill="none"/>
                    <circle cx="6" cy="4.5" r="1.8" stroke="white" strokeWidth="1.3" fill="none"/>
                  </svg>
                  {profile.city}
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="deen-signals">
                {profile.signals.map(s => (
                  <span key={s} className="deen-chip">{s}</span>
                ))}
              </div>
              <p className="bio">{profile.bio}</p>
              <div className="timeline-row">
                <div className="timeline-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="#6B7B6B" strokeWidth="1.5"/>
                    <path d="M10 6V10L12.5 12.5" stroke="#6B7B6B" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="timeline-label">Ready for marriage</div>
                  <div className="timeline-value">{profile.timeline}</div>
                </div>
              </div>
              <button className="btn-primary btn-primary-rose" onClick={handleRequest}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 16.5C12.73 16.5 15.75 13.485 15.75 9.75C15.75 6.015 12.73 3 9 3C5.27 3 2.25 6.015 2.25 9.75C2.25 13.485 5.27 16.5 9 16.5Z" stroke="white" strokeWidth="1.4" fill="none"/>
                  <path d="M6 9.75L8.5 12L12 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Request Introduction
              </button>
              <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                <button className="btn-secondary" onClick={nextProfile}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M2 2L13 13M13 2L2 13" stroke="#6B7B6B" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  Not now
                </button>
                <button className="btn-secondary" onClick={handleSave}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M7.5 13.5L2 8L4 6L7.5 9.5L11 5L13 7L7.5 13.5Z" stroke="#6B7B6B" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="bottom-hint">
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
    { id: 'discover', href: '/discovery', label: 'Discover', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="7" stroke={current === 'discover' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4"/><path d="M11 4V7M11 15V18M4 11H7M15 11H18" stroke={current === 'discover' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { id: 'matches', href: '/matches', label: 'Matches', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4L18 18M4 18L18 4" stroke={current === 'matches' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { id: 'messages', href: '/messages', label: 'Messages', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4H18V14H12L8 18V14H4V4Z" stroke={current === 'messages' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinejoin="round"/></svg> },
    { id: 'profile', href: '/my-profile', label: 'Profile', icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke={current === 'profile' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4"/><path d="M4 19C4 15 7 13 11 13C15 13 18 15 18 19" stroke={current === 'profile' ? '#6B7B6B' : '#9CA3AF'} strokeWidth="1.4" strokeLinecap="round"/></svg> },
  ]
  return (
    <div className="bottom-nav">
      {items.map(item => (
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
