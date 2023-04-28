import styled from 'styled-components';
import Button from '../Button'
import { FeaturesContainer, FeatureHeaderText, LinkButton } from '../common';

export const Container = styled(FeaturesContainer)`
  margin-bottom: 3.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 90%;
    margin: auto;
    margin-top: 5rem;
  }

  @media (min-width: 1100px) {
    width: 70%;
  }
`;

export const HeaderText = styled(FeatureHeaderText)`
  padding: 0.8rem 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 550px) {
    span {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  ${Button} {
    img {
      height: 18px;
      width: 18px;
    }
  }
`;

export const JoinDiscord = styled(LinkButton)`
  margin: 0;
  width: 90%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  color: #2375ef;
  background: none;
  border: 2px solid #2375ef;

  &:hover {
    opacity: 0.85;
  }

  @media (min-width: 550px) {
    width: 238px;
  }

  @media (min-width: 1024px) {
    padding: 8px 14px;
  }
`;

export const MailboxContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }

  .mailbox-img {
    width: 100%;

    @media (min-width: 550px) {
      flex-direction: row;
    }

    @media (min-width: 1100px) {
      width: 50%;
    }
  }
`;

export const CTATextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 550px) {
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1100px) {
    width: 50%;
  }

  .mailbox-info {
    color: #7d8795;
    padding: 0 1.5rem;
    text-align: center;

    font-size: 1rem;
    line-height: 24px;
    margin-bottom: 2rem;

    @media (min-width: 550px) {
      text-align: left;
      margin-bottom: 0.5rem;
    }

    @media (min-width: 1024px) {
      margin-bottom: 0.8rem;
    }
  }
`;

export const CTAHeader = styled(FeatureHeaderText)`
  @media (min-width: 550px) {
    width: 100%;
    text-align: left;
    padding: 0.5rem 1.5rem;
  }
`;

export const MailButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 550px) {
    gap: 1.5rem;
    padding: 0 1.2rem;
    flex-direction: row;
    align-items: flex-start;
  }

  input {
    width: 90%;
    outline: none;
    padding: 1rem;
    font-size: 1rem;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 1rem;
    border: 2px solid #d3e3fc;

    &::placeholder {
      font-size: 1rem;
      color: #7bacf5;
      line-height: 24px;
    }
  }
`;

interface ButtonProps {
  primary?: boolean;
}


export const ErrorMessage = styled.p`
  color: red;
  padding: 0 1.2rem;
  font-size: 0.8rem;
`;

export const SuccessMessage = styled.p`
  color: green;
  padding: 0 1.2rem;
  font-size: 0.8rem;
`;