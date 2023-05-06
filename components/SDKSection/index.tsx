import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';
import { FeatureTextSmall, CustomHeaderText } from '../common';
import { SpaceGrotesk700, DMSans700 } from '../../utils/fonts';
import * as Styled from './styles';
import Button from '../Button';
import { getAPIKeys } from 'othent';

hljs.registerLanguage('javascript', javascript);

const SDKSection = () => {

  async function getAPIKey() {

    const { API_KEY, API_ID } = await getAPIKeys();
    console.log(API_KEY, API_ID)

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
  }, []);

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
            Get API Key
          </Button>
        </Styled.Onboard>

        <Styled.CodeSnippet>
          <pre className="hljs javascript">{codeString}</pre>
        </Styled.CodeSnippet>

      </Styled.OnboardContainer>
    </Styled.MainContainer>
  );
};

export default SDKSection;
