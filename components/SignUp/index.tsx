import * as Styled from './styles';
import { Othent } from 'othent';
import { useState, useEffect } from 'react';

const SignUpComponent = () => {
  const [othentInstance, setOthentInstance] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    async function createOthentInstance() {
      const othent = await Othent({ API_ID: 'd7a29242f7fdede654171a0d3fd25163' });
      setOthentInstance(othent);
    }
    createOthentInstance();
  }, []);

  async function logIn() {
    setUserDetails(await othentInstance.logIn());
  }


  const [copiedPopup, setCopiedPopup] = useState(false);
  const handleCopyPopup = () => {
    setCopiedPopup(true);
    setTimeout(() => {
      setCopiedPopup(false);
    }, 500);
  };
  const [copyClicked, setCopyClicked] = useState(false);
  const handleCopy = () => {
    setCopyClicked(true);
    navigator.clipboard.writeText(userDetails.contract_id);
    handleCopyPopup()
    setTimeout(() => {
      setCopyClicked(false);
    }, 100);
  };


  return (
    <Styled.MainContainer>
        {copiedPopup && (
        <Styled.copiedPopup className="popup">
          Text copied!
        </Styled.copiedPopup>
      )}
      {userDetails ? (

        <Styled.AccountTab>
            <Styled.UserPicture
            src={userDetails.picture}
            alt='User picture'
            referrerPolicy='no-referrer'
            />
            <Styled.UserEmail>{userDetails.email}</Styled.UserEmail>

            <Styled.UserContractIdContainer>
            <Styled.UserContractId className='user-contract-id'>
                <b style={{ color: 'black' }}>Wallet Address: </b>{userDetails.contract_id}
            </Styled.UserContractId>
            <Styled.UserContractIdCopy
                src='./copy.svg'
                alt='Copy contract ID'
                onClick={handleCopy}
                referrerPolicy='no-referrer'
                style={{
                filter: copyClicked
                    ? 'grayscale(100%) brightness(0%)'
                    : 'none',
                }}
            />
            </Styled.UserContractIdContainer>

            <Styled.ViewTransactionsButton
            href={`https://sonar.warp.cc/#/app/contract/${userDetails.contract_id}`}
            target='_blank'
            >
            View Recent Transactions
            </Styled.ViewTransactionsButton>

        </Styled.AccountTab>

      ) : (
        <Styled.LogInButtonContainer>
          <Styled.LogInButton onClick={() => logIn()}>Log In</Styled.LogInButton>
          <Styled.LogInButton onClick={() => logIn()}>Sign Up</Styled.LogInButton>
        </Styled.LogInButtonContainer>
      )}
    </Styled.MainContainer>
  );
};

export default SignUpComponent;
