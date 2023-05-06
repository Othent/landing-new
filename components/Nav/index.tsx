import * as Styled from './styles';
import { DMSans700 } from '../../utils/fonts';
import Button from '../Button';
import { Othent } from 'othent';
import { useState, useEffect, useRef } from 'react';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [othentInstance, setOthentInstance] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    async function createOthentInstance() {
      const othent = await Othent({ API_KEY: 'API_KEY', API_ID: 'API_ID' });
      setOthentInstance(othent);
    }
    createOthentInstance();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const [userPicture, setUserPicture] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userContractId, setUserContractId] = useState('');
  async function logIn() {
    const user_details = await othentInstance.logIn();
    setUserPicture(user_details.picture);
    setUserName(user_details.name)
    setUserEmail(user_details.email)
    setUserContractId(user_details.contract_id)
    setIsLoggedIn(true);
  }

  async function logOut() {
    await othentInstance.logOut();
    setIsLoggedIn(false);
    setUserPicture('');
  }

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function showAccount() {
    setShowDropdown(false);
    setIsPopupOpen(true);
  }

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

  
  const [copyClicked, setCopyClicked] = useState(false);
  const handleCopy = () => {
    setCopyClicked(true);
    const contractId = document.querySelector('.user-contract-id').textContent;
    navigator.clipboard.writeText(contractId);
    setTimeout(() => {
      setCopyClicked(false);
    }, 100);
  };




  


  return (
    <Styled.NavBar>
      <Styled.NavLogo>
        <a href='/' className='site-a-warp'>
          <div className='toggle'>
            <div></div>
          </div>
          <p className={DMSans700.className}>Othent</p>
        </a>
      </Styled.NavLogo>

      <Styled.Menu>
        <a href='https://docs.othent.io/developers/sdk' 
        target='_blank' 
        className={`${DMSans700.className} devs`}>
          Developers
        </a>
        <a href='mailto:hello@othent.io' className={DMSans700.className}>
          Contact Us
        </a>
        {isLoggedIn ? (
          <div ref={dropdownRef}>
            <Styled.UserImgContainer onClick={() => toggleDropdown()}>
                <Styled.DropdownArrow 
                src="./drop_down_arrow.svg" 
                alt='User Profile' 
                referrerPolicy='no-referrer' />
                <Styled.userImg src={userPicture} alt='Drop down' />
            </Styled.UserImgContainer>
            {showDropdown && (
              <Styled.Dropdown>
                <Styled.DropdownItem 
                onClick={() => showAccount()}>
                  Account
                </Styled.DropdownItem>
                <Styled.DropdownItem 
                onClick={() => logOut()}>
                  Log Out
                </Styled.DropdownItem>
              </Styled.Dropdown>
            )}
          </div>
        ) : (
          <Button onClick={() => logIn()}>Sign in / up</Button>
        )}

        {isPopupOpen && (
          <>
          <Styled.BlurredBody className="popup-background" />
          <Styled.Popup>
            <Styled.PopupHeaderContainer>
              <Styled.PopupHeader>
                {userName}
              </Styled.PopupHeader>
              <Styled.PopupCloseButton onClick={() => setIsPopupOpen(false)}>
                Close
              </Styled.PopupCloseButton>
            </Styled.PopupHeaderContainer>
    
            <Styled.PopupBody>
              <Styled.UserPicture src={userPicture} alt="User picture" />
              <Styled.UserEmail>{userEmail}</Styled.UserEmail>
    
              <Styled.UserContractIdContainer>
                <Styled.UserContractId className="user-contract-id">
                  {userContractId}
                </Styled.UserContractId>
                <Styled.UserContractIdCopy
                  src="./user_contract_id_copy.svg"
                  alt="Copy contract ID"
                  onClick={handleCopy}
                  style={{ filter: copyClicked ? "grayscale(100%) brightness(0%)" : "none" }}
                />
              </Styled.UserContractIdContainer>
    
              <Styled.ViewTransactionsButton 
                href={`https://sonar.warp.cc/#/app/contract/${userContractId}`} 
                target="_blank"
              >
                View Recent Transactions
              </Styled.ViewTransactionsButton>
            </Styled.PopupBody>
          </Styled.Popup>
        </>
        )}



      </Styled.Menu>
    </Styled.NavBar>
  );
};

export default Nav;
