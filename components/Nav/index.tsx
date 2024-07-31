import * as Styled from './styles';
import { DMSans700 } from '../../utils/fonts';
import Button from '../Button';
import * as othent from '@othent/kms';
import { useState, useEffect, useRef } from 'react';


const Nav = () => {


  const [userDetails, updateUserDetails] = useState({
    picture: '',
    name: '',
    email: '',
    walletAddress: '',
  });


  useEffect(() => {
    const user_details = JSON.parse(localStorage.getItem('othentUserDetails'))
    if (user_details) {
      updateUserDetails({
        picture: user_details.picture,
        name: user_details.name,
        email: user_details.email,
        walletAddress: user_details.walletAddress
      });
      setIsLoggedIn(true);
    }
  

  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isArrowFlipped, setIsArrowFlipped] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const dropdownRef = useRef(null);

  const [copiedPopup, setCopiedPopup] = useState(false);
  const handleCopyPopup = () => {
    setCopiedPopup(true);
    setTimeout(() => {
      setCopiedPopup(false);
    }, 500);
  };


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);

        if (!isPopupOpen && isArrowFlipped) {
          setIsArrowFlipped(false);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, isArrowFlipped, isPopupOpen]);

  const [isLoading, setIsLoading] = useState(false);
  async function logIn() {
    setIsLoading(true); 
    try {
      const user_details = await othent.connect();
      localStorage.setItem('othentUserDetails', JSON.stringify(user_details));
      updateUserDetails({
        picture: user_details.picture,
        name: user_details.name,
        email: user_details.email,
        // @ts-ignore
        walletAddress: user_details.walletAddress
      });
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  async function logOut() {
    await othent.disconnect();
    localStorage.removeItem('othentUserDetails');
    setIsLoggedIn(false);
    updateUserDetails({
      picture: '',
      name: '',
      email: '',
      walletAddress: ''
    });
  }

  function toggleDropdown() {
    setShowDropdown(!showDropdown);

    setIsArrowFlipped(!isArrowFlipped);
  }


  function showAccount() {
    setShowDropdown(false);
    setIsArrowFlipped(false);
    setIsPopupOpen(true);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('popup-background')) {
        setIsPopupOpen(false);

        if (!showDropdown && isArrowFlipped) {
          setIsArrowFlipped(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isArrowFlipped, showDropdown]);

  const [copyClicked, setCopyClicked] = useState(false);

  const handleCopy = () => {
    setCopyClicked(true);
    navigator.clipboard.writeText(userDetails.walletAddress);
    handleCopyPopup()
    setTimeout(() => {
      setCopyClicked(false);
    }, 100);
  };


  return (
  <Styled.NavBar>
    {copiedPopup && (
        <Styled.copiedPopup className="popup">
          Text copied!
        </Styled.copiedPopup>
      )}
    <Styled.NavLogo>
      <a href='/' className='site-a-warp'>
        <div className='toggle'>
          <div></div>
        </div>
        <p className={DMSans700.className}>Othent</p>
      </a>
    </Styled.NavLogo>
  <Styled.Menu>
    <a href='https://blog.othent.io' target='_blank' className={`${DMSans700.className} devs`}>
      Blog
    </a>
    <a href='mailto:teams@communitylabs.com' className={DMSans700.className}>
      Contact Us
    </a>
    <a href='https://docs.othent.io/developers/sdk' target='_blank' className={`${DMSans700.className} devs`}>
      Developers
    </a>
          
    {isLoggedIn ? (
      <div ref={dropdownRef}>
        <Styled.UserImgContainer onClick={() => toggleDropdown()}>
          <Styled.userImg
            src={userDetails.picture}
            alt='User picture'
            referrerPolicy='no-referrer'
          />
          <Styled.DropdownArrow
            src='./drop_down_arrow.svg'
            alt='Dropdown icon'
            referrerPolicy='no-referrer'
            className={isArrowFlipped ? 'rotate' : ''}
          />
        </Styled.UserImgContainer>

        {showDropdown && (
          <Styled.Dropdown>
            <Styled.DropdownItem onClick={() => showAccount()}>
              Account
            </Styled.DropdownItem>
            <Styled.DropdownItem onClick={() => logOut()}>
              Log Out
            </Styled.DropdownItem>
          </Styled.Dropdown>
        )}
      </div>
    ) : (
      <Button onClick={() => logIn()}>
          {isLoading ? (
            <img src='/spinner.gif' alt="Loading" />
          ) : (
            'Sign in'
          )}
        </Button>
    )}

    {isPopupOpen && (
      <>
      
        <Styled.BlurredBody className='popup-background'>

          <Styled.Popup>
            <Styled.PopupHeaderContainer>
              <Styled.PopupHeader>{userDetails.name}</Styled.PopupHeader>
              <Styled.PopupCloseButton onClick={() => setIsPopupOpen(false)}>
                Close
              </Styled.PopupCloseButton>
            </Styled.PopupHeaderContainer>

            <Styled.PopupBody>
              <Styled.UserPicture
                src={userDetails.picture}
                alt='User picture'
                referrerPolicy='no-referrer'
              />
              <Styled.UserEmail>{userDetails.email}</Styled.UserEmail>

              <Styled.UserContractIdContainer>
                <Styled.UserContractId className='user-contract-id'>
                  <b style={{ color: 'black' }}>Wallet Address: </b>{userDetails.walletAddress}
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
                href={`https://sonar.warp.cc/#/app/contract/${userDetails.walletAddress}`}
                target='_blank'
              >
                View Recent Transactions
              </Styled.ViewTransactionsButton>
            </Styled.PopupBody>
          </Styled.Popup>

        </Styled.BlurredBody>

      </>
    )}
  </Styled.Menu>
</Styled.NavBar>
);
};

export default Nav;