import React, { useEffect, useState } from 'react';
import { FeatureTextSmall, CustomHeaderText } from '../common';
import { SpaceGrotesk700, DMSans700 } from '../../utils/fonts';
import * as Styled from './styles';
import Button from '../Button';
import { Othent } from 'othent';
import Highlight from 'react-highlight';
import 'highlight.js/styles/tomorrow-night-bright.css';




const SDKSection = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [API_ID, setAPI_ID] = useState("");

  const [copiedPopup, setCopiedPopup] = useState(false);
  const handleCopyPopup = () => {
    setCopiedPopup(true);
    setTimeout(() => {
      setCopiedPopup(false);
    }, 500);
  };

  async function getAPIKey() {
    try {
      const othent = await Othent({ API_ID: 'd7a29242f7fdede654171a0d3fd25163' });
      let { API_ID } = await othent.getAPIID();
      setAPI_ID(API_ID);
      setIsPopupOpen(true);
    } catch (error) {
      alert('Please create a Othent account (in the navbar)')
      // if no Othent account maybe we should just create one there and then for them
    }
  }


  const codeString = `import { Othent } from 'othent';

const othent = await Othent({ API_ID });

const user_details = await othent.logIn();

const transaction = await othent.signTransactionArweave({
  othentFunction: 'uploadData',
  data: file,
  tags: [ { name: 'Email', value: user_details.email} ]
});

const tx = await othent.sendTransactionArweave(transaction);

console.log(\`Transaction ID \i\s : \${tx.transactionId}\`);`

  

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (event.target.classList.contains('popup-background')) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);



  const [copyAPIIDClicked, setCopyAPIIDClicked] = useState(false);
  const handleAPIIdCopy = () => {
    setCopyAPIIDClicked(true);
    navigator.clipboard.writeText(API_ID);
    handleCopyPopup()
    setTimeout(() => {
      setCopyAPIIDClicked(false);
    }, 100);
  };


  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    handleCopyPopup()
  }


  const [callbackURL, setCallbackURL] = useState('');
  const [URLMessage, setURLMessage] = useState('');
  async function addCallbackURL() {
    try {
      const othent = await Othent({ API_ID: 'd7a29242f7fdede654171a0d3fd25163' });
      await othent.addCallbackURL({ callbackURL: callbackURL });
      setURLMessage('Success');
    } catch (error) {
      setURLMessage('Failed, please make sure format matches https://othent.io and try again');
    }
  }
  function handleCallbackURLChange(event) {
    setCallbackURL(event.target.value);
    setURLMessage('');
  }



  return (
    <Styled.MainContainer>
      {copiedPopup && (
        <Styled.copiedPopup className="popup">
          Text copied!
        </Styled.copiedPopup>
      )}
      <FeatureTextSmall className={DMSans700.className}>
        Bring dApp’s from 0 to 1
      </FeatureTextSmall>
      <CustomHeaderText className={SpaceGrotesk700.className}>
        Builders, get started in seconds
      </CustomHeaderText>

      <Styled.OnboardContainer>
        <Styled.Onboard>
          <Styled.TextOne className={DMSans700.className}>
            Try it out!
          </Styled.TextOne>
          <Styled.TextTwo className={DMSans700.className}>
            Onboard Web2 into
          </Styled.TextTwo>

          <Styled.IconsContainer>
            <div>
              <img src='/link-icon.svg' alt='link icon' draggable={false} />
              <p className={DMSans700.className}>Chains</p>
            </div>
            <div>
              <img src='/code-icon.svg' alt='link icon' draggable={false} />
              <p className={DMSans700.className}>dApps</p>
            </div>
            <div>
              <img src='/wallet-icon.svg' alt='link icon' draggable={false} />
              <p className={DMSans700.className}>Wallets</p>
              </div>
          </Styled.IconsContainer>
          <Button onClick={() => getAPIKey()}>
            Get your API ID
          </Button>


        {isPopupOpen && (
          <>
            <Styled.BlurredBody className="popup-background">
              
              <Styled.Popup>

                <Styled.PopupHeaderContainer>
                  <Styled.PopupHeader>Your API ID</Styled.PopupHeader>
                  <Styled.PopupCloseButton onClick={() => setIsPopupOpen(false)}>
                    Close
                  </Styled.PopupCloseButton>
                </Styled.PopupHeaderContainer>

                <Styled.PopupBody>
                  
                  <Styled.APIDetailsContainer>
                    <Styled.ApiKeyIdLabel>API ID:</Styled.ApiKeyIdLabel>
                    <Styled.ApiKeyIdValue>{API_ID}</Styled.ApiKeyIdValue>
                    <Styled.APICopy
                      src="./copy.svg"
                      alt="Copy icon"
                      onClick={handleAPIIdCopy}
                      style={{ filter: copyAPIIDClicked ? "grayscale(100%) brightness(0%)" : "none" }}
                    />
                  </Styled.APIDetailsContainer>

                  <Styled.AddURLContainer>
                  <Styled.AddURL
                    placeholder="Add callback URLs, eg https://othent.io"
                    value={callbackURL}
                    onChange={handleCallbackURLChange}
                  />
                  <Styled.AddURLButton onClick={addCallbackURL}>Add callback URL</Styled.AddURLButton>
                  {URLMessage && (
                    <Styled.URLMessage style={{ color: URLMessage === 'Success' ? 'green' : 'red' }}>
                      {URLMessage}
                    </Styled.URLMessage>
                  )}
                </Styled.AddURLContainer>

                </Styled.PopupBody>
              </Styled.Popup>
            </Styled.BlurredBody> 
            
          </>
        )}


      </Styled.Onboard>

      <div>
        <div className='code-block-header'>
          <div className='header-buttons-container'>
            <div style={{ backgroundColor: 'rgb(255, 94, 87)' }} className="header-buttons"></div>
            <div style={{ backgroundColor: 'rgb(255, 187, 46)' }} className="header-buttons"></div>
            <div style={{ backgroundColor: 'rgb(56, 193, 73)' }} className="header-buttons"></div>
          </div>
          <button className='copy-code' onClick={copyCode}>
            <img src="./copy-black.svg" alt="Copy icon" className='copy-code-img' />
            <span>Copy</span>
          </button>
        </div>
        <Highlight className='code-block'>
          {codeString}
        </Highlight>
      </div>

      

  </Styled.OnboardContainer>
</Styled.MainContainer>

);
};

export default SDKSection;