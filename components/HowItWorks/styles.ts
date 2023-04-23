import styled from 'styled-components';
import Button from '../Button'
import { FeatureHeaderText, FeaturesContainer } from '../common';

export const Container = styled(FeaturesContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  .works-desktop {
    display: none;

    @media (min-width: 550px) {
      width: 100%;
      display: block;
      padding: 2rem;
    }

    @media (min-width: 1024px) {
      width: 80%;
      margin-top: 1rem;
      padding: 2rem 6rem;
    }

    @media (min-width: 1100px) {
      width: 70%;
    }
  }

  .works-mobile {
    margin-top: 2rem;

    @media (min-width: 550px) {
      display: none;
    }
  }

  ${Button} {
    padding: 12px 1rem;
  }
`;

export const HeaderText = styled(FeatureHeaderText)`
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;

  @media (min-width: 550px) {
    width: 70%;
    margin: auto;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1100px) {
    width: 45%;
  }
`;
