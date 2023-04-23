import { useState } from 'react';
import { FeatureTextSmall } from '../common';

import { DMSans700, SpaceGrotesk700, DMSans500 } from '../../utils/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import * as Styled from './styles';
import Button from '../Button'

const WeaveTransfer = () => {
  const [testMail, setTestMail] = useState('');
  const [testMessage, setTestMessage] = useState('');
  const [txnInputValue, setTxnInputValue] = useState('');
  const [menuActive, setMenuActive] = useState('upload');
  const [downloadDemo, setDownloadDemo] = useState(false);
  const [uploadClicked, setUploadClicked] = useState(false);

  const handleUploadClick = () => {
    setUploadClicked(true);
  };

  const handleUploadClose = () => {
    setTestMail('');
    setTestMessage('');
    setUploadClicked(false);
  };

  const handleDownloadDemo = async () => {
    if (txnInputValue) {
      setDownloadDemo(true);
      setTimeout(() => {
        setDownloadDemo(false);
      }, 2500);
    }
  };

  const UploadModal = () => {
    return (
      <Styled.UploadModalContainer>
        {uploadClicked ? (
          <img src='/upload-container-blue.svg' alt='upload container' draggable={false} />
        ) : (
          <>
            <img
              src='/upload-container.svg'
              alt='upload container'
              className='upload-mobile-svg'
              draggable={false}
            />
            <img
              src='/browse-files.svg'
              alt='upload container'
              className='upload-desktop-svg'
              draggable={false}
            />
          </>
        )}

        {uploadClicked ? (
          <div>
            <p className={`${DMSans700.className} file-selected`}>
              filename.jsx
            </p>
            <p className={`${DMSans700.className} file-size`}>8kb</p>
          </div>
        ) : (
          <div className='select-upload-container'>
            <p className={`${DMSans700.className} upload-text-mobile`}>
              No file selected
            </p>
            <p className={`${DMSans700.className} browse-files-mobile`}>
              Browse files...
            </p>
            <p className={`${DMSans700.className} upload-text-desktop`}>
              Browse files
            </p>
            <p className={`${DMSans700.className} browse-files-desktop`}>
              or drag it here...
            </p>
          </div>
        )}
      </Styled.UploadModalContainer>
    );
  };

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
              {uploadClicked ? (
                <Styled.UploadDemo clicked={uploadClicked}>
                  <UploadModal />

                  {uploadClicked ? (
                    <div onClick={handleUploadClose}>
                      <img src='/x-close.svg' alt='upload container' draggable={false} />
                    </div>
                  ) : null}
                </Styled.UploadDemo>
              ) : (
                <Styled.UploadDemo
                  clicked={uploadClicked}
                  onClick={handleUploadClick}
                >
                  <UploadModal />
                </Styled.UploadDemo>
              )}

              <input
                readOnly
                type='text'
                className={`${DMSans500.className} upload-text`}
                placeholder='Message (optional)'
                onClick={() => {
                  if (uploadClicked) {
                    setTestMessage('Test message');
                  }
                }}
                value={testMessage}
              />
              <input
                readOnly
                type='text'
                placeholder='Email'
                className={`${DMSans500.className} upload-text`}
                onClick={() => {
                  if (uploadClicked) {
                    setTestMail('hello@othent.io');
                  }
                }}
                value={testMail}
              />

              <Button fullWidth>
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

              <Button onClick={handleDownloadDemo} fullWidth>
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
          <Button href='' secondary>
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
