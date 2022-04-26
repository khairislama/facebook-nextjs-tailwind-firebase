import Head from 'next/head'

interface LayoutProps {
  title: string
  keywords: string
  description: string
  children: React.ReactNode
}

function Layout({ title, keywords, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="h-screen overflow-hidden bg-gray-100">{children}</div>
    </>
  )
}

Layout.defaultProps = {
  title: 'Facebook 2.0 Home | Facebook clone',
  description:
    'This is a Facebook clone created by khairi slama to get the hand of using nextjs',
  keywords: 'facebook, fb, clone',
}

export default Layout
