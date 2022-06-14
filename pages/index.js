import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const  styles = {
  container : `h-full w-full flex bg-[#fff]`
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>amazon_v3.0</title>
        <meta name="amazon_v3" content="amazon store built on web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Sidebar />

 
    </div>
  )
}
