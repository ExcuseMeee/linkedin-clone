import Head from 'next/head'
import { signOut } from 'next-auth/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LinkedIn Clone</title>
      </Head>

      <button onClick={signOut}>
        Sign Out
      </button>

    </div>
  )
}
