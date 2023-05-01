import * as Styled from './styles';
import { FeatureHeaderText, LinkButton } from '../common';
import {
  SpaceGrotesk700,
  DMSans700,
  DMSans500,
  DMSans400,
} from '../../utils/fonts';
import Button from '../Button';
import { useState } from 'react';


const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  function isValidEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  async function saveEmail() {
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('https://server.othent.io/email-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for subscribing!');
        setErrorMessage('');
        setEmail('');
      } else {
        setErrorMessage('An error occurred while subscribing.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while subscribing.');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <Styled.Container>
      <Styled.HeaderText className={SpaceGrotesk700.className}>
        Start onboarding your users <span>from Web2 to Web3</span>
      </Styled.HeaderText>
      <Styled.ButtonsContainer>
        <Button href='https://docs.othent.io' target='_blank'>
          Get Started
        </Button>
        <Button secondary href='https://discord.gg/WPPBPtKbbN' target='_blank'>
          <img src='/discord-colored.svg' alt='discord logo' draggable={false} />
          Join our Discord
        </Button>
      </Styled.ButtonsContainer>

      <Styled.MailboxContainer>
        <img src='/backdrop.svg' alt='mailbox' className='mailbox-img' draggable={false} />

        <Styled.CTATextContainer>
          <Styled.CTAHeader className={`${SpaceGrotesk700.className} test`}>
            Stay up to date
          </Styled.CTAHeader>
          <p className={`${DMSans400.className} mailbox-info`}>
            Stay up-to-date on all the latest information about new features,
            special offers, and more. Don't miss out on all the exciting things
            happening!
          </p>
          <Styled.MailButtonsWrapper>
            <input
              type='text'
              placeholder='no@spam.com'
              className={DMSans400.className}
              value={email}
              onChange={handleEmailChange}
            />
            <Button onClick={saveEmail}>
              Subscribe
            </Button>
          </Styled.MailButtonsWrapper>
          {errorMessage && (
            <Styled.ErrorMessage className={DMSans400.className}>
              {errorMessage}
            </Styled.ErrorMessage>
          )}
          {successMessage && (
            <Styled.SuccessMessage className={DMSans400.className}>
              {successMessage}
            </Styled.SuccessMessage>
          )}
        </Styled.CTATextContainer>
      </Styled.MailboxContainer>
    </Styled.Container>
  );
};

export default CallToAction;
