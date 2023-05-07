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


  .code-block {


    word-break: break-all;


    font-size: 5px;

   /* @media (min-width: 550px) {
     width: 50%;
   }

   @media (min-width: 720px) {
     width: 60%;
   } */
  }




`;

export const Onboard = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${Button} {
    padding: 12px 1rem;

    @media (min-width: 550px) {
      padding: 12px 1rem;
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
  margin-bottom: 1rem;

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




export const BlurredBody = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  z-index: 999;
`;


export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #d3e3fc;
  background: white;
`;





export const PopupHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;
export const PopupHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;
export const PopupCloseButton = styled(Button)`
  margin: 0;
`;



export const PopupBody = styled.div`
  display: flex;
  flex-direction: column;
`;



export const APIDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const APICopy = styled.img`
  height: 15px;
  margin-left: 10px;
  cursor: pointer;
`


export const ApiKeyLabel = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;
export const ApiKeyValue = styled.p`
  font-size: 16px;
  word-break: break-all;
  text-align: center;
  width: 60%;
`;

export const ApiKeyIdLabel = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;
export const ApiKeyIdValue = styled.p`
  font-size: 16px;
  word-break: break-all;
  text-align: center;
  width: 60%;
`;







