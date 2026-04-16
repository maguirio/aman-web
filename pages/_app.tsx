import type { AppProps } from 'next/app'
import '../styles/globals.css'

// NOTE: Individual pages contain their own .phone-frame root div.
// Do NOT wrap Component here — that would double-nest phone-frame.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
