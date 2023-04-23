import Head from 'next/head';
import Footer from '../components/Footer';
import Features from '../components/Features';
import { DemoGif, HeroSectionWrapper } from '../components/common';
import HowItWorks from '../components/HowItWorks';
import SDKSection from '../components/SDKSection';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import WeaveTransfer from '../components/WeaveTransfer';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
} from '../components/sharedstyles';

export default function Home() {
  return (
    <SectionOne>
      <Head>
        <title>Othent</title>
        <meta name='description' content='Merging Web2 to Web3 user logins with a familiar and simple interface.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
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
      </main>
      <Footer />
    </SectionOne>
  );
}
