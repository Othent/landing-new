import styled from 'styled-components';
import Button from '../Button'

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 1.5rem;
  width: 50%;

  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 5.5rem 1.5rem 2rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 40px;
    letter-spacing: 0.02em;
    margin: 0;

    @media (min-width: 550px) {
      min-width: 90%;
      max-width: 92%;
      font-size: 2.3rem;
      align-self: flex-start;
    }

    @media (min-width: 1100px) {
      font-size: 3rem;
      width: 100%;
      line-height: 50px;
    }
  }

  @keyframes spin_words {
    0% {
      transform: translateY(-12%);
    }
    2.7% {
      transform: translateY(-10%);
    }
    5.4% {
      transform: translateY(-112%);
    }
    8.1% {
      transform: translateY(-100%);
    }
    10.8% {
      transform: translateY(-212%);
    }
    13.5% {
      transform: translateY(-200%);
    }
    16.2% {
      transform: translateY(-312%);
    }
    18.9% {
      transform: translateY(-300%);
    }
    21.6% {
      transform: translateY(-412%);
    }
    24.3% {
      transform: translateY(-400%);
    }
    27% {
      transform: translateY(-512%);
    }
    29.7% {
      transform: translateY(-500%);
    }
    32.4% {
      transform: translateY(-612%);
    }
    35.1% {
      transform: translateY(-600%);
    }
    37.8% {
      transform: translateY(-712%);
    }
    40.5% {
      transform: translateY(-700%);
    }
    43.2% {
      transform: translateY(-812%);
    }
    45.9% {
      transform: translateY(-800%);
    }
    48.6% {
      transform: translateY(-912%);
    }
    51.3% {
      transform: translateY(-900%);
    }
    54% {
      transform: translateY(-1012%);
    }
    56.7% {
      transform: translateY(-1000%);
    }
    59.4% {
      transform: translateY(-1112%);
    }
    62.1% {
      transform: translateY(-1100%);
    }
    64.8% {
      transform: translateY(-1212%);
    }
    67.5% {
      transform: translateY(-1200%);
    }
    70.2% {
      transform: translateY(-1312%);
    }
    72.9% {
      transform: translateY(-1300%);
    }
    75.6% {
      transform: translateY(-1412%);
    }
    78.3% {
      transform: translateY(-1400%);
    }
    81% {
      transform: translateY(-1512%);
    }
    83.7% {
      transform: translateY(-1500%);
    }
    86.4% {
      transform: translateY(-1612%);
    }
    89.1% {
      transform: translateY(-1600%);
    }
    91.8% {
      transform: translateY(-1712%);
    }
    94.5% {
      transform: translateY(-1700%);
    }
  }
`;

export const Tagline = styled.div`
  font-size: 1.25rem;
  color: #4a505a;

  @media (min-width: 1100px) {
    width: 75%;
    font-size: 1.2rem;
    align-self: flex-start;
  }
`;

export const SocialLogins = styled.div`
  box-sizing: content-box;
  height: 26px;
  display: flex;
  gap: 0.5rem;

  @media (min-width: 550px) {
    display: inline-flex;
  }

  .items-container {
    overflow: hidden;
  }

  span {
    height: 100%;
    display: block;
    animation: spin_words 16s infinite;
  }

  .special {
    img {
      height: 24px;
    }

    @media (min-width: 1024px) {
      img {
        height: 19px;
      }
    }
  }

  .discord {
    color: #5865f2;
  }
  .dribble {
    color: #e84c88;
  }
  .twitch {
    color: #9147ff;
  }
  .spotify {
    color: #1ed760;
  }
  .vimeo {
    color: #1ab7ea;
  }
  .facebook {
    color: #1778f2;
  }
  .apple {
    color: #a2aaad;
  }
  .linkedin {
    color: #0072b1;
  }
  .github {
    color: #f1502f;
  }
  .dropbox {
    color: #007ee5;
  }
  .yahoo {
    color: #6200d1;
  }
  .paypal {
    background: linear-gradient(90deg, #002b8a 0%, #019ae0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .amazon {
    color: #ff9900;
  }
  .twitter {
    color: #1da1f2;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: row;

  @media (max-width: 720px) {
    flex-direction: column;

    ${Button} {
      width: 100%;
    }
  }
`;
