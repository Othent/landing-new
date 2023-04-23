import * as Styled from './styles';
import { FeatureHeaderText, LinkButton } from '../common';
import {
  SpaceGrotesk700,
  DMSans700,
  DMSans500,
  DMSans400,
} from '../../utils/fonts';
import Button from '../Button';

const CallToAction = () => {
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
            />
            <Button>
              Subscribe
            </Button>
          </Styled.MailButtonsWrapper>
        </Styled.CTATextContainer>
      </Styled.MailboxContainer>
    </Styled.Container>
  );
};

export default CallToAction;
