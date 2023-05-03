import styled from 'styled-components';
import { FeaturesContainer } from '../common';
import Button from "../Button";

export const MainContainer = styled(FeaturesContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const OnboardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1rem;
  padding: 1.2rem;
  border-radius: 16px;
  border: 1px solid #d3e3fc;
  background: #f2f2f2;

  @media (min-width: 550px) {
    gap: 2rem;
    width: 90%;
    padding: 1.5rem;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    gap: 3.5rem;
    width: 70%;
    padding: 3rem 1.5rem;
  }

  @media (min-width: 1100px) {
    width: 55%;
    padding: 3rem 1.5rem;
  }
`;

export const Onboard = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${Button} {
    padding: 9px 1rem;
    margin: 1.5rem 0;

    @media (min-width: 550px) {
      margin: auto;
      padding: 9px .6rem;
    }
  }
`;

export const TextOne = styled.p`
  font-size: 1.125rem;
  color: #2375ef;
  line-height: 24px;
  text-align: center;

  @media (min-width: 550px) {
    font-size: 1rem;
  }
`;
export const TextTwo = styled.p`
  font-size: 1.25rem;
  line-height: 32px;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: 550px) {
    font-size: 1.125rem;
    text-align: center;
  }
`;

export const IconsContainer = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 550px) {
    gap: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 550px) {
      margin-bottom: 1rem;
    }

    img {
      width: 45px;
      height: 45px;

      background: #d3e3fc;
      border-radius: 8px;
      padding: 0.7rem;

      @media (min-width: 550px) {
        width: 38px;
        height: 38px;
      }
    }
    
    p {
      font-size: 15px;
      margin: 0.1rem 0;
      line-height: 24px;
    }
  }
`;

export const CodeSnippet = styled.img`
  width: 100%;

  @media (min-width: 550px) {
    width: 50%;
  }

  @media (min-width: 720px) {
    width: 60%;
  }
`;



