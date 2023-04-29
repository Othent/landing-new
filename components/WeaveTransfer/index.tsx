import { useState } from 'react';
import { FeatureTextSmall } from '../common';

import { DMSans700, SpaceGrotesk700, DMSans500 } from '../../utils/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import * as Styled from './styles';
import Button from '../Button'
import styled from 'styled-components';

const WeaveTransfer = () => {



  const [txnInputValue, setTxnInputValue] = useState('');
  const [menuActive, setMenuActive] = useState('upload');
  const [downloadDemo, setDownloadDemo] = useState(false);



  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");



  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState("");
  const [transaction_id, setTransactionId] = useState("");


  const sendFromEmail = 'lj'
  const [message, setMessage] = useState("")
  const [sendToEmail, setSendToEmail] = useState("")


  function handleFileUpload(event) {
    const file = event.target.files[0];
    setFile(file);
    setFileName(file.name);
    console.log(file)
  }




  function uploadFileButton() {

    if (!file) {
      alert("No file selected to upload");
      return;
    }

    if (!sendToEmail) {
      alert("Please enter the recipient email");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("message", message);
    formData.append("sendToEmail", sendToEmail);
    formData.append("sendFromEmail", sendFromEmail);
  
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
        console.log(data)
        if (data.success === true) {
          setRequestStatus('success');
          setMessage("")
          setSendToEmail("")
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

      <Styled.Container>
        <Styled.WTContainer>
          <div className='weave-transfer'>
            <img src='/wt-logo.svg' alt='weave transfer logo' draggable={false} />
            <p className={SpaceGrotesk700.className}>Weave Transfer</p>
          </div>

          <p className={`${DMSans500.className} wt-text`}>
            Permanent file transfer and storage using the Arweave permaweb and
            Othent walletless protocol.
          </p>

          <AnimatePresence initial={false}>
            {menuActive === 'upload' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ width: '100%', overflow: 'hidden' }}
              >
                <Button fullWidth>
                  <img src='/wt-google.svg' alt='wt google' draggable={false} />
                  Sign with Google
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

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



              <div
              onDragOver={handleFileUpload}
              onDrop={handleFileUpload}
              className={`${DMSans700.className} file-upload`}
              >
                <label htmlFor="file-input">
                <span className="upload-icon" role="img" aria-label="upload icon">
                  {fileName ? "✅" : "📁"}
                </span>
                <span className="upload-text">
                  {fileName ? fileName : "Choose a file or drag it here"}
                </span>
              </label>
              <input id="file-input" type="file" onChange={handleFileUpload} />

              </div>












              <input
                type='text'
                className={`${DMSans500.className} upload-text`}
                placeholder='Message (optional)'
                value={message} 
                onChange={(event) => setMessage(event.target.value)} 
                />

              <input
                type='text'
                placeholder='Recipient email'
                className={`${DMSans500.className} upload-text`}
                value={sendToEmail} 
                onChange={(event) => setSendToEmail(event.target.value)} 
              />



              <Button fullWidth onClick={uploadFileButton}>
                <img src='/upload-icon.svg' alt='upload icon' draggable={false} />
                Upload
              </Button>


            </>











          ) : (
            <>
              <p className='txn-id'>Transaction ID: </p>
              {downloadDemo ? (
                <img src='/downloading.svg' alt='' draggable={false} />
              ) : (
                <input
                  readOnly
                  type='text'
                  className='txn-input'
                  placeholder='Enter your ID here...'
                  value={txnInputValue}
                  onClick={() => {
                    setTxnInputValue('NVkSolD-1AJcJ0BMfEASJjIuak3Y...');
                  }}
                />
              )}

              <Button fullWidth>
                <img src='/download.svg' alt='upload icon' draggable={false} />
                Download
              </Button>
            </>
          )}
        </Styled.WTContainer>

        <Styled.StepsContainer>
          <Styled.Steps>
            <div>
              <p className={`${DMSans700.className} special`}>
                <span>1</span>
                Drag and drop a file
              </p>
            </div>

            <div>
              <p className={DMSans700.className}>
                <span>2</span>
                Recipient Email
              </p>
            </div>

            <div>
              <p className={DMSans700.className}>
                <span>3</span>
                Add a message
              </p>
            </div>

            <div>
              <p className={DMSans700.className}>
                <span>4</span>
                Upload to blockchain with Google
              </p>
            </div>

            <div>
              <p className={DMSans700.className}>
                <span>5</span>
                Share your file
              </p>
            </div>
          </Styled.Steps>
          <Button href='https://weavetransfer.com' target='_blank' secondary>
            View WeaveTransfer Live
            <span>
              <img src='/arrow-icon-blue.svg' alt='arrow icon' draggable={false} />
            </span>
          </Button>
        </Styled.StepsContainer>
      </Styled.Container>
    </Styled.MainWrapper>
  );
};

export default WeaveTransfer;
