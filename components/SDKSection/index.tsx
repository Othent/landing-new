import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';
import { FeatureTextSmall, CustomHeaderText } from '../common';
import { SpaceGrotesk700, DMSans700 } from '../../utils/fonts';
import * as Styled from './styles';
import Button from '../Button';
import { getAPIKeys, Othent } from 'othent';

hljs.registerLanguage('javascript', javascript);

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
      console.log(API_ID, API_KEY);
      // pop up please create a account and then generate API keys button u know
    } catch (error) {
      console.log(error);
      const othent = await Othent({ API_KEY: "API_KEY", API_ID: "API_ID" });
      await othent.logIn();
      let { API_KEY, API_ID } = await getAPIKeys();
      setAPI_KEY(API_KEY);
      setAPI_ID(API_ID);
      setIsPopupOpen(true);
    }
  }

  const codeString = `
    const othent = await Othent({ API_KEY, API_ID });

    const user_details = await othent.logIn();

    const transaction = await othent.signTransactionArweave({
      othentFunction: 'uploadData',
      data: file,
      tags: [ { name: 'Email', value: user_details.email} ]
    });

    const { transactionId } = await othent.sendTransactionArweave(transaction);
    
    console.log(\`\${user_details.name}, your transaction ID is : \${transactionId}\`)
  `;

  useEffect(() => {
    hljs.highlightAll();

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
            Eliminate the need for private keys, not the want, into:
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
                    src="./user_contract_id_copy.svg"
                    alt="Copy icon"
                    onClick={handleAPIKeyCopy}
                    style={{ filter: copyAPIKeyClicked ? "grayscale(100%) brightness(0%)" : "none" }}
                  />
                </Styled.APIDetailsContainer>
                
                <Styled.APIDetailsContainer>
                  <Styled.ApiKeyIdLabel>API ID:</Styled.ApiKeyIdLabel>
                  <Styled.ApiKeyIdValue>{API_ID}</Styled.ApiKeyIdValue>
                  <Styled.APICopy
                    src="./user_contract_id_copy.svg"
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

    <Styled.CodeSnippet>
      <pre className="hljs javascript">{codeString}</pre>
    </Styled.CodeSnippet>

  </Styled.OnboardContainer>
</Styled.MainContainer>

);
};

export default SDKSection;