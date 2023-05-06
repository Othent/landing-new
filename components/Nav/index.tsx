import * as Styled from './styles';
import { DMSans700 } from '../../utils/fonts';
import Button from '../Button';
import { Othent } from 'othent';
import { useState, useEffect, useRef } from 'react';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPic, setUserPic] = useState('');
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

  async function logIn() {
    const user = await othentInstance.logIn();
    setUserPic(user.picture);
    setIsLoggedIn(true);
  }

  async function logOut() {
    await othentInstance.logOut();
    setIsLoggedIn(false);
    setUserPic('');
  }

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

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
        <a href='https://docs.othent.io/developers/sdk' target='_blank' className={`${DMSans700.className} devs`}>
          Developers
        </a>
        <a href='mailto:hello@othent.io' className={DMSans700.className}>
          Contact Us
        </a>
        {isLoggedIn ? (
          <div ref={dropdownRef}>
            <Styled.UserImgContainer onClick={() => toggleDropdown()}>
                <Styled.DropdownArrow src="./drop_down_arrow.svg" alt='User Profile' referrerPolicy='no-referrer' />
                <Styled.userImg src={userPic} alt='Drop down' referrerPolicy='no-referrer' />
            </Styled.UserImgContainer>
            {showDropdown && (
              <Styled.Dropdown>
                {/* <Styled.DropdownItem onClick={() => logOut()}>Account</Styled.DropdownItem> */}
                <Styled.DropdownItem onClick={() => logOut()}>Log Out</Styled.DropdownItem>
              </Styled.Dropdown>
            )}
          </div>
        ) : (
          <Button onClick={() => logIn()}>Create Account</Button>
        )}
      </Styled.Menu>
    </Styled.NavBar>
  );
};

export default Nav;
