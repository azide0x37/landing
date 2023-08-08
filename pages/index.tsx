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
        <title>Discover Shaw, St. Louis | Nemea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header id="top" title="Shaw Neighborhood, St. Louis" />

      <main>
        <Hero
          title="Welcome to Shaw"
          subtitle="A Historical Jewel in the Heart of St. Louis"
          illustration="" // Consider adding a panoramic shot of Shaw
        />

        <Benefits
          background="alternate"
          subtitle='A Neighborhood with a Story to Tell'
          title="The Essence of Shaw"
          benefits={[
            { illustration: '', title: 'Historical Charm', text: 'Stroll through time with our rich architecture and storied past.' },
            { illustration: '', title: 'Community Spirit', text: 'Experience the vibrant culture and welcoming community.' },
            { illustration: '', title: 'Modern Amenities', text: 'Enjoy the best of both worlds, with modern comforts in a historic setting.' },
          ]}
        />

        <Break
          title="Nemea Companies"
          subtitle="Your Partner in Shaw's Real Estate Journey"
          illustration=""
          action="Explore Services"
          onActionClick={() => { /* Link to your services page */ }}
        />

        <Highlights
          title="Shaw At a Glance"
          subtitle="A Neighborhood with a Story to Tell"
          highlights={[
            { illustration: '', title: 'Botanical Gardens', text: 'A serene escape right in the neighborhood.' },
            { illustration: '', title: 'Local Cafes & Eateries', text: 'Savor the flavors of Shaw’s diverse culinary scene.' },
            { illustration: '', title: 'Community Events', text: 'Engage with local events, festivals, and gatherings.' },
          ]}
        />

        <Features
          background="alternate"
          subtitle='A Neighborhood with a Story to Tell'
          title="Nemea's Expertise"
          features={[
            { illustration: '', title: 'Rental Services', text: 'Find your perfect home in the heart of Shaw.' },
            { illustration: '', title: 'Property Management', text: 'Tailored solutions for property owners in the neighborhood.' },
            { illustration: '', title: 'Real Estate Consultation', text: 'Navigate the Shaw real estate landscape with the best.' },
          ]}
        />

        <Epilogue
          title="Be a Part of Shaw's Legacy"
          subtitle="Reach out to learn more about living, investing, or just being part of our community."
          illustration=""
          subscribePlaceholder="Stay Updated. Drop your email!"
          subscribeAction="Join the Community!"
        />
      </main>

      <Footer
        title="Shaw Neighborhood & Nemea | Building Communities Together"
      />
    </div>
  )
}
