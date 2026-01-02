import { DMSans700, SpaceGrotesk600 } from '../../utils/fonts';
import * as Styled from './styles';
import Button from '../Button';

const HeroSection = () => {
  return (
    <Styled.HeroSection>
      <h2 className={SpaceGrotesk600.className}>
        <Styled.OthentBrand className={DMSans700.className}>Othent</Styled.OthentBrand> is deprecated
      </h2>

      <Styled.Tagline className={DMSans700.className}>
        The service was deprecated on January 1, 2026
      </Styled.Tagline>

      {/* <h2 className={SpaceGrotesk600.className}>
        <Styled.OthentBrand className={DMSans700.className}>Othent</Styled.OthentBrand> is being deprecated
      </h2>

      <Styled.Tagline className={DMSans700.className}>
        Transfer all your assets off Othent by January 1, 2026
      </Styled.Tagline>

      <Styled.ButtonsWrapper>
        <Button href='https://transfer.othent.io' target='_blank'>
          Transfer assets
        </Button>
      </Styled.ButtonsWrapper> */}
    </Styled.HeroSection>
  );
};

export default HeroSection;
