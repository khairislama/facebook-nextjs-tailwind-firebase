import { getSession } from 'next-auth/react'
import Feed from '../components/feeds/Feed'
import Header from '../components/header/Header'
import Layout from '../components/Layout'
import Login from '../components/Login'
import Sidebar from '../components/sidebar/Sidebar'

export default function Home({ user }: any) {
  if (!user) return <Login />
  return (
    <Layout>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      props: {},
    }
  }
  const { user } = session
  return {
    props: { user },
  }
}
