import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

type Step = 'name' | 'gender' | 'email' | 'done'

export default function Signup() {
  const router = useRouter()
  const [step, setStep] = useState<Step>('name')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState<'male' | 'female' | ''>('')
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleNext = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 800)) // simulate API
    if (step === 'name') setStep('gender')
    else if (step === 'gender') setStep('email')
    else if (step === 'email') {
      setStep('done')
      setTimeout(() => router.push('/discovery'), 1200)
    }
    setLoading(false)
  }

  const canProceed = step === 'name' ? name.trim().length >= 2
    : step === 'gender' ? !!gender
    : step === 'email' ? email.includes('@') && password.length >= 8 && agreed
    : false

  return (
    <>
      <Head>
        <title>Join Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className="phone-frame">
        {/* Notch */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 150, height: 30, background: 'var(--ivory)', borderRadius: '0 0 20px 20px', zIndex: 10 }} />

        {/* Status Bar */}
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
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
              <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#0F172A" strokeWidth="1"/>
              <path d="M22 4V8C23 8.5 24 9.5 24 11" stroke="#0F172A" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Progress */}
        <div style={{ padding: '8px 24px 0' }}>
          <div style={{ display: 'flex', gap: 4 }}>
            {['name','gender','email'].map((s, i) => (
              <div key={s} style={{ flex: 1, height: 4, background: step === s || (step === 'gender' && i === 0) || (step === 'email' && i <= 1) ? 'var(--rose-pink)' : 'var(--border)', borderRadius: 2, transition: 'background 0.3s' }} />
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="screen-header">
          {step === 'name' && <>
            <h1 className="screen-title">Assalamu Alaikum</h1>
            <p className="screen-subtitle">What is your full name?</p>
          </>}
          {step === 'gender' && <>
            <h1 className="screen-title">I am a...</h1>
            <p className="screen-subtitle">This determines who you can connect with</p>
          </>}
          {step === 'email' && <>
            <h1 className="screen-title">Join Aman</h1>
            <p className="screen-subtitle">Let&apos;s find you a good spouse, Allah willing</p>
          </>}
          {step === 'done' && <>
            <h1 className="screen-title" style={{ color: 'var(--sage)' }}>Welcome, {name.split(' ')[0]}!</h1>
            <p className="screen-subtitle">Setting up your profile...</p>
          </>}
        </div>

        {/* Form */}
        <div className="form-content">
          {step === 'name' && (
            <div className="input-group">
              <label className="input-label">Full name</label>
              <input
                className="input-field"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={e => setName(e.target.value)}
                autoFocus
              />
            </div>
          )}

          {step === 'gender' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {[
                { id: 'male', label: 'Male', sub: 'Looking for a wife', icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="11" stroke="var(--sage)" strokeWidth="1.5"/>
                    <path d="M14 9V19M9 14H19" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )},
                { id: 'female', label: 'Female', sub: 'Looking for a husband', icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="11" stroke="var(--rose-pink)" strokeWidth="1.5"/>
                    <path d="M14 9V14L17 17" stroke="var(--rose-pink)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )},
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setGender(opt.id as 'male' | 'female')}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14, padding: '18px 16px',
                    background: gender === opt.id ? (opt.id === 'male' ? 'rgba(107,123,107,0.06)' : 'rgba(232,76,119,0.06)') : 'var(--pure-white)',
                    border: `1.5px solid ${gender === opt.id ? (opt.id === 'male' ? 'var(--sage)' : 'var(--rose-pink)') : 'var(--border)'}`,
                    borderRadius: 16, cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', width: '100%',
                  }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {opt.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 600, color: 'var(--navy)' }}>{opt.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{opt.sub}</div>
                  </div>
                  {gender === opt.id && (
                    <div style={{ marginLeft: 'auto', width: 20, height: 20, borderRadius: '50%', background: opt.id === 'male' ? 'var(--sage)' : 'var(--rose-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {step === 'email' && (
            <>
              <div className="input-group">
                <label className="input-label">Email address</label>
                <input className="input-field" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="input-group">
                <label className="input-label">Password</label>
                <input className="input-field" type="password" placeholder="At least 8 characters" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="checkbox-row">
                <div
                  onClick={() => setAgreed(!agreed)}
                  style={{ width: 20, height: 20, border: `1.5px solid ${agreed ? 'var(--sage)' : 'var(--border)'}`, borderRadius: 6, background: agreed ? 'var(--sage)' : 'var(--pure-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  {agreed && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span className="checkbox-label">I agree to <span style={{ color: 'var(--rose-pink)' }}>Terms of Service</span> and <span style={{ color: 'var(--rose-pink)' }}>Privacy Policy</span></span>
              </div>
              {/* Islamic Divider */}
              <div className="divider">
                <svg viewBox="0 0 200 20" fill="none" style={{ width: 200, height: 20, color: 'var(--border)' }}>
                  <line x1="0" y1="10" x2="70" y2="10" stroke="currentColor" strokeWidth="1"/>
                  <polygon points="100,2 108,10 100,18 92,10" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <polygon points="100,5 104,10 100,15 96,10" fill="currentColor"/>
                  <line x1="130" y1="10" x2="200" y2="10" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
            </>
          )}

          {step !== 'done' && (
            <button
              className="btn-primary"
              style={{ background: gender === 'female' ? 'var(--rose-pink)' : 'var(--sage)', boxShadow: gender === 'female' ? 'var(--btn-shadow-rose)' : 'var(--btn-shadow)' }}
              onClick={handleNext}
              disabled={!canProceed || loading}
            >
              {loading ? 'Please wait...' : step === 'email' ? 'Create My Profile' : 'Continue'}
            </button>
          )}

          {step === 'email' && (
            <Link href="/login" className="ghost-link">Already have an account? Sign in</Link>
          )}
        </div>
      </div>
    </>
  )
}
