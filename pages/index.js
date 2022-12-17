import Head from 'next/head'
import { signOut } from 'next-auth/react'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LinkedIn Clone</title>
      </Head>

      <Header />

      <button onClick={signOut}>
        Sign Out
      </button>

    </div>
  )
}
