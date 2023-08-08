import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import Notice from '../components/Notice';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AzideMakes - Unleashing the Maker in You</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header id="top" title="AzideMakes" />

      <main>
        <Hero
          title="AzideMakes"
          subtitle="Where 3D Printing Meets Open Source Magic!"
          illustration="" // Consider adding a fun, techie illustration here
        />

        <Benefits
          background="alternate"
          subtitle='Ignite. Innovate. Inspire.'
          title="The Magic of Making"
          benefits={[
            { illustration: '', title: '3D Printing', text: 'Breathing life to ideas one layer at a time!' },
            { illustration: '', title: 'Open Source Hardware', text: 'Open to all, limited by none. Dive into the vast ocean of open tech!' },
            { illustration: '', title: 'Radio Frequency Tech', text: 'Where waves carry more than just sound. Explore the hidden frequencies!' },
          ]}
        />

        <Break
          title="Maker. Hacker. Innovator."
          illustration=""
          subtitle="Join me on a thrilling journey of creation!"
          action="Explore Projects"
          onActionClick={() => { /* Link to your project/portfolio page */ }}
        />

        <Highlights
          title="Signature Creations"
          subtitle="Here are some of my favorite projects!"
          highlights={[
            { illustration: '', title: 'Project Aether', text: 'A 3D printed drone soaring the skies!' },
            { illustration: '', title: 'OpenBeam', text: 'A modular open-source tech platform.' },
            { illustration: '', title: 'RadioWave', text: 'A deep dive into the world of wireless communication.' },
          ]}
        />

        <Features
          background="alternate"
          title="Tutorials & Guides"
          subtitle='Learn the ropes of making with these step-by-step guides.'
          features={[
            { illustration: '', title: '3D Printing 101', text: 'Step into the world of 3D printing with this beginner’s guide.' },
            { illustration: '', title: 'Hack the Airwaves', text: 'Dive deep into radio frequencies and uncover hidden potentials.' },
            { illustration: '', title: 'Open Tech Assemble!', text: 'The ultimate guide to open-source hardware projects.' },
          ]}
        />

        <Epilogue
          title="Be Part of the Creation Revolution!"
          subtitle="Hop on and let's craft, hack, and make wonders together!"
          illustration=""
          subscribePlaceholder="Stay Updated. Drop your email!"
          subscribeAction="Join the Tribe!"
        />
      </main>

      <Footer
        title="AzideMakes | Ignite. Innovate. Inspire."
      />
    </div>
  )
}
