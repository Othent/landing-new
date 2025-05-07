import styled from "styled-components";
import Button from "../Button";

export const NavBarContainer = styled.div`
  * {
    margin: 0;
  }

  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 999;


  a {
    display: inline-flex;
  }
`;
export const Banner = styled.header`
  * {
    margin: 0;
  }

  width: 100%;
  display: flex;
  padding: 0.25rem 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #2375efdd;
  color: #eeeeee;
  backdrop-filter: blur(20px);
  z-index: 9999;
  font-weight: 400;
  font-size: 1.25rem;

  @media (max-width: 1100px) {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    font-size: .825rem;
  }

  @media (max-width: 690px) {
    font-size: .75rem;
  }

  @media (max-width: 640px) {
    font-size: .625rem;
  }

`;
export const NavBar = styled.header`
  * {
    margin: 0;
  }

  width: 100%;
  display: flex;
  padding: 1.1rem 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  z-index: 999;

  @media (max-width: 720px) {
    padding: 1.1rem;
    gap: 1rem;
  }

  .site-a-warp {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  gap: 0.6rem;

  p {
    color: #2375ef;
    font-size: 1.125rem;

    @media (min-width: 550px) {
      font-size: 1rem;
    }
  }

  .toggle {
    width: 60px;
    height: 35px;
    border-radius: 2rem;
    background: #2375ef;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    div {
      height: 33px;
      width: 33px;
      margin-right: 1px;
      border-radius: 50%;
      background: #fff;
    }

    @media (min-width: 550px) {
      width: 57px;
      height: 32px;

      div {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  ${Button} {
    padding: 8px 14px;

    @media screen and (max-width: 720px) {
      padding: 6px 14px;
    }
  }

  a {
    transition: all 0.23s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      width: 100%;
      text-align: center;
    }
  }
`;

export const UserImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const userImg = styled.img`
  height: 32px;
  width: 32px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const DropdownArrow = styled.img`
  margin-left: 5px;
  height: 6px;
  margin-top: 6px;

  &.rotate {
    transform: rotate(180deg);
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(90%);
  right: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 10;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  color: #333333;
  padding: 8px 20px;
  cursor: pointer;
  transition: background-color 0.23s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const BlurredBody = styled.div`
  height: 100vh;
  max-width: 100vw;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popup = styled.div`
  position: relative;
  max-width: 600px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #d3e3fc;
  background: white;

  @media screen and (max-width: 600px) {
    width: 90%;
    max-width: 400px;
  }
`;

export const PopupCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  margin-left: auto;
  border: none;
  background: transparent;
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transition: transform linear 150ms;

  &:hover {
    transform: scale(1.1);
  }
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

export const UserProperty = styled.p`
  font-size: 16px;
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const UserPropertyName = styled.strong`
  display: block;
  color: #000;
`;

export const UserPropertyValue = styled.span`
  display: flex;
  color: #666;
  align-items: center;
`;

export const UserAddressCopyButton = styled.img`
  padding: 2px 0 2px 10px;
  height: 21px;
  cursor: pointer;
  transition: transform linear 150ms;
  filter: grayscale(100%) brightness(0%);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ViewTransactionsButton = styled(Button)`
  margin-top: 2rem;
`;

export const copiedPopup = styled.div`
  background-color: #2dd264;
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
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &.hidden {
    animation-direction: reverse;
    @keyframes fade {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`;
