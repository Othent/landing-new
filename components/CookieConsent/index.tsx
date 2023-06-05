import React, { useState } from 'react';
import * as Styled from './styles'

const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(true);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <Styled.CookieContainer className="cookie-banner">
        <b>We value your privacy</b>
        <p>
            <span>By clicking "Accept", you consent to our cookies. </span>
            <a style={{ color: '#2375ef' }} target='_blank' href="/tos.pdf">Privacy Policy</a>
        </p>
        <Styled.ButtonContainers>
            <Styled.AcceptButton onClick={handleAccept}>Accept</Styled.AcceptButton>
            <Styled.AcceptButton secondary style={{ background: '#ffff' }} onClick={handleDecline}>Decline</Styled.AcceptButton>
        </Styled.ButtonContainers>
    </Styled.CookieContainer>
  );
};

export default CookieConsentBanner;
