import styled from 'styled-components';
import { FeaturesContainer } from '../common';
import Button from "../Button";

export const MainContainer = styled(FeaturesContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 0;
`;

export const LogInButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;
export const LogInButton = styled(Button)`
`;


export const AccountTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  width: 400px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid #d3e3fc;
  background: white;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 600px) {
    width: 90%;
    max-width: 400px;
  }
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
  margin-top: auto;
`;

export const PopupBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const UserPicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const UserEmail = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const UserContractIdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserContractId = styled.p`
  font-size: 16px;
  color: #666;
  word-break: break-all;
  text-align: center;
  width: 70%;
`;

export const UserContractIdCopy = styled.img`
  height: 15px;
  margin-left: 10px;
  cursor: pointer;
`;

export const ViewTransactionsButton = styled(Button)`
  margin-top: 2rem;
`;

export const copiedPopup = styled.div`
  background-color: #2DD264;
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  margin-top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
  z-index: 9999;

  opacity: 0;
  animation: fade 1s ease-in-out;
  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  &.hidden {
    animation-direction: reverse;
    @keyframes fade {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  }
`;


export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ffff;
  border-top: 8px solid #2375ef;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

