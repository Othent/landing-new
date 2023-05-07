import Head from 'next/head';
import Footer from '../components/Footer';
import Features from '../components/Features';
import { DemoGif, HeroSectionWrapper } from '../components/common';
import HowItWorks from '../components/HowItWorks';
import SDKSection from '../components/SDKSection';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import WeaveTransfer from '../components/WeaveTransfer';
import Page from '../components/Page';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
} from '../components/sharedstyles';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => console.log('You should consider working with us, email hello@othent.io'), []);

  
  return (
    <SectionOne>
      <Head>
        <title>Othent - Merging Web2 to Web3 user logins with a familiar and simple interface.</title>
        <link rel='icon' href='https://Othent.io/favicon.ico' />
        <meta property="og:title" content="Othent - Merging Web2 to Web3 user logins with a familiar and simple interface."/>
        <meta property='og:description' content='Othent - Merging Web2 to Web3 user logins with a familiar and simple interface.' />
        <meta property="og:url" content="https://Othent.io"/>
        <meta property="og:image" content="https://Othent.io/favicon.ico"/>
        <meta property="og:image:width" content="200"/>
        <meta property="og:image:height" content="200"/>
        <meta name="keywords" content="Othent, Smart Contract Wallets, Web3, JWT Transactions, Arweave, Community Labs"></meta>
        <meta name="author" content="Othent.io"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="theme-color" content="#2375EF"></meta>
        <meta name="twitter:site" content="@othent_io"></meta>
        <meta property="og:site_name" content="Othent"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css" />
      </Head>

      <Page>
        <SectionTwo>
          <HeroSectionWrapper>
            <HeroSection />
            <DemoGif>
              <img src='/demo-gif.gif' alt='demo-gif' draggable={false} />
            </DemoGif>
          </HeroSectionWrapper>
          <Features
            type='mission'
            textSmall='Our mission is to'
            headerText='Empower 5 Billion Web2 users with a robust gateway to Web3'
          />
        </SectionTwo>
        <WeaveTransfer />
        <SectionThree>
          <Features
            type='simplicity'
            textSmall='Ease matters to us'
            headerText="Simplicity is key, keys aren't simplicity"
          />
          <HowItWorks />
        </SectionThree>
        <SectionFour>
          <SDKSection />
          <CallToAction />
        </SectionFour>
      </Page>
      <Footer />
    </SectionOne>
  );
}
