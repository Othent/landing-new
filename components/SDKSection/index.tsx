import React, { useState } from "react";
import { FeatureTextSmall, CustomHeaderText } from "../common";
import { SpaceGrotesk700, DMSans700 } from "../../utils/fonts";
import * as Styled from "./styles";
import Highlight from "react-highlight";
import "highlight.js/styles/tomorrow-night-bright.css";

const SDKSection = () => {
  const [copiedPopup, setCopiedPopup] = useState(false);
  const handleCopyPopup = () => {
    setCopiedPopup(true);
    setTimeout(() => {
      setCopiedPopup(false);
    }, 500);
  };

  // TODO: Replace this example with KMS usage
  const codeString = `import { Othent } from 'othent';

const othent = await Othent({ API_ID });

const user_details = await othent.logIn();

const transaction = await othent.signTransactionArweave({
  othentFunction: 'uploadData',
  data: file,
  tags: [ { name: 'Email', value: user_details.email} ]
});

const tx = await othent.sendTransactionArweave(transaction);

console.log(\`Transaction ID \i\s : \${tx.transactionId}\`);`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    handleCopyPopup();
  };

  return (
    <Styled.MainContainer>
      {copiedPopup && (
        <Styled.copiedPopup className="popup">Text copied!</Styled.copiedPopup>
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
              <img src="/link-icon.svg" alt="link icon" draggable={false} />
              <p className={DMSans700.className}>Chains</p>
            </div>
            <div>
              <img src="/code-icon.svg" alt="link icon" draggable={false} />
              <p className={DMSans700.className}>dApps</p>
            </div>
            <div>
              <img src="/wallet-icon.svg" alt="link icon" draggable={false} />
              <p className={DMSans700.className}>Wallets</p>
            </div>
          </Styled.IconsContainer>
        </Styled.Onboard>

        <div>
          <div className="code-block-header">
            <div className="header-buttons-container">
              <div
                style={{ backgroundColor: "rgb(255, 94, 87)" }}
                className="header-buttons"
              ></div>
              <div
                style={{ backgroundColor: "rgb(255, 187, 46)" }}
                className="header-buttons"
              ></div>
              <div
                style={{ backgroundColor: "rgb(56, 193, 73)" }}
                className="header-buttons"
              ></div>
            </div>
            <button className="copy-code" onClick={copyCode}>
              <img
                src="./copy-black.svg"
                alt="Copy icon"
                className="copy-code-img"
              />
              <span>Copy</span>
            </button>
          </div>
          <Highlight className="code-block">{codeString}</Highlight>
        </div>
      </Styled.OnboardContainer>
    </Styled.MainContainer>
  );
};

export default SDKSection;
