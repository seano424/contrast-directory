import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 font-primary bg-white xl:w-[1140px] w-[800px] xl:mx-auto">
      <Head>
        <title>Contrast Directory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  )
}
