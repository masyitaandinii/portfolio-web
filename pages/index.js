import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Portofolio from '../components/Portofolio'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Andini | Portofolio Web</title>
        <meta name="description" content="I’m a Software Engineering Student at SMK Telkom Malang" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Portofolio />
    <Footer />
    </div>
  )
}
