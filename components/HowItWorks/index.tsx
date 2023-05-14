import * as Styled from './styles';
import { FeatureTextSmall } from '../common';
import { SpaceGrotesk700, DMSans700 } from '../../utils/fonts';
import Button from '../Button';

export default function HowItWorks() {
  return (
    <Styled.Container>
      <FeatureTextSmall className={DMSans700.className}>How?</FeatureTextSmall>
      <Styled.HeaderText className={SpaceGrotesk700.className}>
        A simple process backed by the power of the permaweb on the Arweave
        blockchain
      </Styled.HeaderText>

      <Button href='https://docs.othent.io/overview/how-it-works' target='_blank'>
        How it works
      </Button>

      <img src='/works-mobile.svg' alt='' className='works-mobile' draggable={false} />
      <img src='/works-desktop.svg' alt='' className='works-desktop' draggable={false} />
    </Styled.Container>
  );
}
