import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Guardian Gorilla - Protector of ACOMUnity DAO</title>
        <meta name="description" content="Guardian Gorilla - Protector of ACOMUnity DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <AboutSection />
      </main>
    </>
  );
}
