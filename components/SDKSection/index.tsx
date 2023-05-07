import React, { useEffect, useState } from 'react';
import { FeatureTextSmall, CustomHeaderText } from '../common';
import { SpaceGrotesk700, DMSans700 } from '../../utils/fonts';
import * as Styled from './styles';
import Button from '../Button';
import { getAPIKeys } from 'othent';
import Highlight from 'react-highlight';
import 'highlight.js/styles/tomorrow-night-bright.css';




const SDKSection = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [API_KEY, setAPI_KEY] = useState("");
  const [API_ID, setAPI_ID] = useState("");

  async function getAPIKey() {
    try {
      let { API_KEY, API_ID } = await getAPIKeys();
      setAPI_KEY(API_KEY);
      setAPI_ID(API_ID);
      setIsPopupOpen(true);
    } catch (error) {
      alert('Please create a Othent account (in the navbar)')
      // if no Othent account maybe we should just create one there and then for them
    }
  }


  const codeString = `import { Othent } from 'othent';

const othent = await Othent({ API_KEY, API_ID });

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
    setTimeout(() => {
      setCopyAPIIDClicked(false);
    }, 100);
  };


  const [copyAPIKeyClicked, setCopyAPIKeyClicked] = useState(false);
  const handleAPIKeyCopy = () => {
    setCopyAPIKeyClicked(true);
    navigator.clipboard.writeText(API_KEY);
    setTimeout(() => {
      setCopyAPIKeyClicked(false);
    }, 100);
  };


  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
  }



  return (
    <Styled.MainContainer>
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
            Get your API Keys
          </Button>


        {isPopupOpen && (
          <>
            <Styled.BlurredBody className="popup-background"></Styled.BlurredBody> 
            <Styled.Popup>

              <Styled.PopupHeaderContainer>
                <Styled.PopupHeader>Your API Keys</Styled.PopupHeader>
                <Styled.PopupCloseButton onClick={() => setIsPopupOpen(false)}>
                  Close
                </Styled.PopupCloseButton>
              </Styled.PopupHeaderContainer>

              <Styled.PopupBody>

                <Styled.APIDetailsContainer>
                  <Styled.ApiKeyLabel>API Key:</Styled.ApiKeyLabel>
                  <Styled.ApiKeyValue>{API_KEY}</Styled.ApiKeyValue>
                  <Styled.APICopy
                    src="./copy.svg"
                    alt="Copy icon"
                    onClick={handleAPIKeyCopy}
                    style={{ filter: copyAPIKeyClicked ? "grayscale(100%) brightness(0%)" : "none" }}
                  />
                </Styled.APIDetailsContainer>
                
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

              </Styled.PopupBody>
            </Styled.Popup>
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