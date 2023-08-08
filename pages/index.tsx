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
        <title>Alex Templeton - Application Performance Engineering Specialist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header id="top" title="Alex Templeton" />

      <main>
        <Hero
          title="Alex Templeton"
          subtitle="Application Performance Engineering - Enterprise Holdings"
          illustration="" // You can add a profile picture or related graphic here
        />

        <Benefits
          background="alternate"
          title="Certifications & Skills"
          benefits={[
            { illustration: '', title: 'AWS Certified Solutions Architect', text: 'Certified in Oct 2018' },
            { illustration: '', title: 'edX Verified Certificate', text: 'For Introduction to Computer Science and Programming Using Python in Mar 2015' },
            { illustration: '', title: 'Key Skills', text: 'Terraform, Serverless, Amplify, AWS, API Development, Docker, Git, and more.' },
          ]}
        />

        <Break
          title="Contact"
          subtitle="alex@templeton.cloud | (650) 942-3527"
          action="View LinkedIn Profile"
          onActionClick={() => window.location.href = "https://linkedin.com/in/azide0x37"}
        />

        <Highlights
          title="Key Projects & Initiatives"
          highlights={[
            { illustration: '', title: 'Thursday Games', text: 'A NodeJS/NEXT.js Serverless Progressive Web App deployed on AWS from June 2022 to July 2022.' },
            { illustration: '', title: 'GuardianAlgo', text: 'Algorithmic Volatility Trading using Quantopian API and Robinhood trade API from Dec 2016 to May 2017.' },
            { illustration: '', title: 'Founder of Skylist Pro', text: 'A flight school, booking, rental, and tracking application leveraging modern technologies.' },
          ]}
        />

        <Features
          background="alternate"
          title="Experience"
          features={[
            { illustration: '', title: 'Enterprise Holdings', text: 'Application Performance Engineering from July 2021 - Present' },
            { illustration: '', title: 'Refinitiv/London Stock Exchange Group', text: 'Lead DevOps SRE from Feb 2020 - June 2021' },
            // ... Other experiences can be added similarly
          ]}
        />

        <Epilogue
          title="Ready for a New Challenge"
          subtitle="Experienced in modern technologies and always eager to embrace the next big thing in tech."
          illustration=""
          subscribePlaceholder="Drop me a line"
          subscribeAction="Contact Me"
        />
      </main>

      <Footer
        title="Based in St. Louis, MO | Available for Remote Roles"
      />
    </div>
  )
}
