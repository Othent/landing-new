import { useState } from 'react';
import { FeatureTextSmall } from '../common';

import { DMSans700, SpaceGrotesk700, DMSans500 } from '../../utils/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import * as Styled from './styles';
import Button from '../Button'
import styled from 'styled-components';
import othent from 'othent'

const WeaveTransfer = () => {



  
  const [menuActive, setMenuActive] = useState('upload');
  const [downloadDemo, setDownloadDemo] = useState(false);


  const [downloadTransactionId, setDownloadTransactionId] = useState('');




  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState("");



  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  function handleFileUpload(event) {
    const file = event.target.files[0];
    setFile(file);
    setFileName(file.name);
  }


  

  const [txnInputValue, setTxnInputValue] = useState(null);
  function downloadWTLink() {
    if (!txnInputValue) {
      alert("Please enter a transaction id");
      return;
    }
    console.log(txnInputValue)
  }



  const [sendToEmail, setSendToEmail] = useState("")
  const [userPicture, setUserPicture] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  function isValidEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }


  const [transaction_id, setTransactionId] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  async function uploadFileButton() {

    if (!file) {
      alert("No file selected to upload");
      return;
    }

    if (!sendToEmail) {
      alert("Please enter the recipient email");
      return;
    }

    if (!isValidEmail(sendToEmail)) {
      alert('Please enter a valid recipient email address');
      return;
    }


    const user_details = await othent.logIn()
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("sendToEmail", sendToEmail);
    formData.append("sendFromEmail", user_details.email);

    setLoading(true)
  
    fetch('https://server.othent.io/weavetransfer', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setTransactionId(data.transactionId);
        setFileName("");
        setFile(null);
        if (data.success === true) {
          setRequestStatus('success');
          setSendToEmail("")
          setUserEmail('Sent with ' + user_details.email + '!')
          setUserPicture(user_details.picture)
          setWalletAddress(user_details.contract_id)
        } else {
          setRequestStatus('failed');
        }
      })
      .catch((error) => {
        console.error(error);
        setRequestStatus('failed');
        setLoading(false);
      });
  

  }



  return (
    <Styled.MainWrapper>
      <FeatureTextSmall className={DMSans700.className}>
        Use Web2 for Web3 transactions
      </FeatureTextSmall>
      <Styled.HeaderText className={SpaceGrotesk700.className}>
        Experience it yourself
      </Styled.HeaderText>

      <Styled.Container >
        <Styled.WTContainer>
          <div className='weave-transfer'>
            <img src='/wt-logo.svg' alt='weave transfer logo' draggable={false} />
            <p className={SpaceGrotesk700.className}>Weave Transfer</p>
          </div>

          <p className={`${DMSans500.className} wt-text`}>
            Example app using Othent on chain file transfer without a wallet
          </p>

          <Styled.UploadMenu active={menuActive}>
            <div className='menu-items'>
              <p
                className={`${DMSans700.className} upload-text`}
                onClick={() => {
                  setTxnInputValue('');
                  setMenuActive('upload');
                }}
              >
                Upload
              </p>
              <p
                className={`${DMSans700.className} download-text`}
                onClick={() => setMenuActive('download')}
              >
                Download
              </p>
            </div>
            <div className='progress'>
              <div className='indicator' />
            </div>
          </Styled.UploadMenu>

          {menuActive === 'upload' ? (
            <>

                <label 
                onDragOver={handleFileUpload}
                onDrop={handleFileUpload} 
                className={`${DMSans700.className} file-upload`} 
                htmlFor="file-input">

                <span className="upload-icon" role="img" aria-label="upload icon">
                  {fileName ? "✅" : "📁"}
                </span>
                <span className="upload-text">
                  {fileName ? fileName : "Choose a file or drag it here"}
                </span>

              </label>
              <input id="file-input" type="file" onChange={handleFileUpload} />


              <input
                type='text'
                placeholder='Recipient email'
                className={`${DMSans500.className} upload-text`}
                value={sendToEmail} 
                onChange={(event) => setSendToEmail(event.target.value)} 
              />

              {transaction_id && walletAddress && (
                <div className="transaction-info">
                  <p>
                    <b>Transaction ID: </b>
                    <a className='txn-id-a' href={'https://arweave.net/' + transaction_id} target="_blank">{transaction_id}</a>
                  </p>
                  <p>
                    <b>Your Wallet Address: </b>
                    <span>{walletAddress}</span>
                  </p>
                </div>
              )}

              
              <Button fullWidth onClick={uploadFileButton}>
                {userPicture ? (
                  <img className="user-icon" src={userPicture} alt="User profile" />
                ) : null}
                {loading && !userPicture ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    {!userPicture && <img src="/wt-google.svg" alt="Google icon" draggable={false} />}
                    {userEmail || 'Send on-chain with Google'}
                  </>
                )}
              </Button>

            </>











          ) : (
            <>
              <p className='txn-id'>Transaction ID: </p>
              {downloadDemo ? (
                <img src='/downloading.svg' alt='' draggable={false} />
              ) : (
                <input
                  type='text'
                  className='txn-input'
                  placeholder='Enter your Transaction ID here...'
                  value={downloadTransactionId} 
                  onChange={(event) => setDownloadTransactionId(event.target.value)} 
                />
              )}

              <Button onClick={downloadWTLink} fullWidth>
                <img src='/download.svg' alt='upload icon' draggable={false} />
                Download
              </Button>
            </>
          )}
        </Styled.WTContainer>




      </Styled.Container>
    </Styled.MainWrapper>
  );
};

export default WeaveTransfer;
