import { DMSans700, SpaceGrotesk600 } from '../../utils/fonts';
import * as Styled from './styles';
import Button from '../Button';
import { othent } from '../../utils/othent';
import { useEffect, useState } from 'react';
import { UserDetails } from '@othent/kms';

const HeroSection = () => {
  const [userDetails, updateUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    return othent.addEventListener('auth', (userDetails) => {
      updateUserDetails(userDetails);
    });
  }, []);

  async function handleSeeUserDetailsOrConnect() {
    let currentUserDetails = userDetails;

    if (!currentUserDetails) {
      currentUserDetails = await othent.connect();
    }

    alert(`Name:\n${currentUserDetails.name}
      \nEmail\n${currentUserDetails.email}
      \nWallet Address:\n${currentUserDetails.walletAddress}
      \nYou can sign out in the top right hand corner of the page.`
    );
  }

  return (
    <Styled.HeroSection>
      <h2 className={SpaceGrotesk600.className}>
        Simplicity is key,
        <br />
        Keys aren't simple
      </h2>

      <Styled.Tagline className={DMSans700.className}>
        Web3 transactions with existing traditional social logins, {' '}
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
        <Button onClick={handleSeeUserDetailsOrConnect}>
          <img src="/wt-google.svg" alt="Google icon" draggable={false} />
          { userDetails ? 'See user Details' : 'Create Account' }
        </Button>
        <Button secondary href='https://docs.othent.io' target='_blank'>
          Docs
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.HeroSection>
  );
};

export default HeroSection;
