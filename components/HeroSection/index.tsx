import { SpaceGrotesk700, DMSans700, SpaceGrotesk600 } from '../../utils/fonts';
import * as Styled from './styles';
import Button from '../Button';
import { Othent } from 'othent';
import { useState, useEffect } from 'react';


const HeroSection = () => {


  const [othentInstance, setOthentInstance] = useState(null);
  useEffect(() => {
    async function createOthentInstance() {
      const othent = await Othent({ API_ID: '1f73e23e3437dd623f5530e90ac1d1b2' });
      setOthentInstance(othent);
    }
    createOthentInstance();
  }, []);

  async function logIn() {
    const user_details = await othentInstance.logIn();
    if (user_details.contract_id) {
      alert(`Success ! 
      \nWallet address: ${user_details.contract_id} 
      \nEmail: ${user_details.email}
      \nYou can now sign in, in the top right hand corner of the page.`)
    } else {
      alert('Please refresh the page and try again !')
      window.location.reload();
    }
  }


  return (
    <Styled.HeroSection>
      <h2 className={SpaceGrotesk600.className}>
        Merging Web2 to Web3 user logins with a familiar and simple interface
      </h2>

      <Styled.Tagline className={DMSans700.className}>
        Blockchain transactions with existing traditional social logins,{' '}
        <Styled.SocialLogins>
          like{' '}
          <div className='items-container'>
            <span className='discord'>Discord</span>
            <span className='special'>
              <img src='/figma.svg' alt='figma' draggable={false} />
            </span>
            <span className='dribble'>Dribble</span>
            <span className='special'>
              <img src='/slack.svg' alt='slack' draggable={false} />
            </span>
            <span className='twitch'>Twitch</span>
            <span className='spotify'>Spotify</span>
            <span className='vimeo'>Vimeo</span>
            <span className='special'>
              <img src='/google.svg' alt='google' draggable={false} />
            </span>
            <span className='facebook'>Facebook</span>
            <span className='apple'>Apple</span>
            <span className='special'>
              <img src='/microsoft.svg' alt='microsoft' draggable={false} />
            </span>
            <span className='linkedin'>LinkedIn</span>
            <span className='github'>Github</span>
            <span className='dropbox'>Dropbox</span>
            <span className='yahoo'>Yahoo</span>
            <span className='paypal'>Paypal</span>
            <span className='amazon'>Amazon</span>
            <span className='twitter'>Twitter</span>
          </div>
        </Styled.SocialLogins>
      </Styled.Tagline>

      <Styled.ButtonsWrapper>
        <Button onClick={() => logIn()}>
          <img src="/wt-google.svg" alt="Google icon" draggable={false} />
          Create wallet with Google
        </Button>
        <Button secondary href='https://docs.othent.io' target='_blank'>
          Docs
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.HeroSection>
  );
};

export default HeroSection;
