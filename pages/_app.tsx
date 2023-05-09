import type { AppProps } from 'next/app'
import ActivePathProvider from 'src/contexts/activeLink/provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActivePathProvider>
      <Component {...pageProps} />
    </ActivePathProvider>
  )
}
