import { FeatureTextSmall, CustomHeaderText } from '../common';
import { SpaceGrotesk700, DMSans700 } from '../../utils/fonts';
import * as Styled from './styles';
import Button from '../Button';

const SDKSection = () => {
  return (
    <Styled.MainContainer>
      <FeatureTextSmall className={DMSans700.className}>
        Bring dApp’s from 0 to 1
      </FeatureTextSmall>
      <CustomHeaderText className={SpaceGrotesk700.className}>
        Builders, get started in seconds
      </CustomHeaderText>

      <Styled.OnboardContainer>
        <Styled.Onboard>
          <Styled.TextOne className={DMSans700.className}>
            Try it out!
          </Styled.TextOne>
          <Styled.TextTwo className={DMSans700.className}>
            Eliminate the need for private keys, not the want, into:
          </Styled.TextTwo>

          <Styled.IconsContainer>
            <div>
              <img src='/link-icon.svg' alt='link icon' draggable={false} />
              <p className={DMSans700.className}>Chains</p>
            </div>
            <div>
              <img src='/code-icon.svg' alt='link icon' draggable={false} />
              <p className={DMSans700.className}>dApps</p>
            </div>
            <div>
              <img src='/wallet-icon.svg' alt='link icon' draggable={false} />
              <p className={DMSans700.className}>Wallets</p>
            </div>
          </Styled.IconsContainer>

          <Button href='https://docs.othent.io/developers/sdk' target='_blank'>
            Explore the SDK's
            <span>
              <img src='/arrow-icon.svg' alt='arrow icon' draggable={false} />
            </span>
          </Button>
        </Styled.Onboard>

        <Styled.CodeSnippet src='/code.svg' alt='code snippet' />
      </Styled.OnboardContainer>
    </Styled.MainContainer>
  );
};

export default SDKSection;
