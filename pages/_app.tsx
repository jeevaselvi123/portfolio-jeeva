import type { AppProps } from 'next/app'
import Layout from 'src/components/Layout'
import ActivePathProvider from 'src/contexts/activeLink/provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActivePathProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ActivePathProvider>
  )
}
