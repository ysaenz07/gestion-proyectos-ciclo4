import type { AppProps } from 'next/app'
import '../styles/globals.css'
//imports globales
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
