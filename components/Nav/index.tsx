import * as Styled from "./styles";
import { DMSans700 } from "../../utils/fonts";
import Button from "../Button";
import { useState, useEffect, useRef } from "react";
import { othent } from "../../utils/othent";
import { UserDetails } from "@othent/kms";

const Nav = () => {
  const [userDetails, updateUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    return othent.addEventListener("auth", (userDetails) => {
      updateUserDetails(userDetails);
    });
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);
  const [isArrowFlipped, setIsArrowFlipped] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);

        if (!isPopupOpen && isArrowFlipped) {
          setIsArrowFlipped(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, isArrowFlipped, isPopupOpen]);

  const [isLoading, setIsLoading] = useState(false);

  async function logIn() {
    setIsLoading(true);

    try {
      await othent.connect();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function logOut() {
    await othent.disconnect();
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
      if (event.target.classList.contains("popup-background")) {
        setIsPopupOpen(false);

        if (!showDropdown && isArrowFlipped) {
          setIsArrowFlipped(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isArrowFlipped, showDropdown]);

  const [copiedPopup, setCopiedPopup] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(userDetails.walletAddress);

    setCopiedPopup(true);

    setTimeout(() => {
      setCopiedPopup(false);
    }, 1000);
  };

  return (
    <Styled.NavBarContainer>
      <Styled.Banner>
        <span>
          <strong>Othent</strong> is being deprecated.&nbsp;
        </span>
        <span>
          Check out&nbsp;
          <strong>
            <a href="https://wander.app/connect" target="_blank">
              Wander Connect
            </a>
          </strong>
          &nbsp;as the new, improved alternative.&nbsp;
        </span>
        <span>
          <strong>
            <a href="https://wander.app/connect" target="_blank">
              Learn More
            </a>
          </strong>
        </span>
      </Styled.Banner>
      <Styled.NavBar>
        {copiedPopup && (
          <Styled.copiedPopup className="popup">
            Text copied!
          </Styled.copiedPopup>
        )}
        <Styled.NavLogo>
          <a href="/" className="site-a-warp">
            <div className="toggle">
              <div></div>
            </div>
            <p className={DMSans700.className}>Othent</p>
          </a>
        </Styled.NavLogo>
        <Styled.Menu>
          <a
            href="https://blog.othent.io"
            target="_blank"
            className={`${DMSans700.className} devs`}
          >
            Blog
          </a>
          <a
            href="mailto:team@communitylabs.com"
            className={DMSans700.className}
          >
            Contact Us
          </a>
          <a
            href="https://docs.othent.io/js-sdk/intro"
            target="_blank"
            className={`${DMSans700.className} devs`}
          >
            Developers
          </a>

          {userDetails ? (
            <div ref={dropdownRef}>
              <Styled.UserImgContainer onClick={() => toggleDropdown()}>
                <Styled.userImg
                  src={userDetails.picture}
                  alt="User picture"
                  referrerPolicy="no-referrer"
                />
                <Styled.DropdownArrow
                  src="./drop_down_arrow.svg"
                  alt="Dropdown icon"
                  referrerPolicy="no-referrer"
                  className={isArrowFlipped ? "rotate" : ""}
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
              {isLoading ? <img src="/spinner.gif" alt="Loading" /> : "Sign in"}
            </Button>
          )}

          {isPopupOpen && (
            <>
              <Styled.BlurredBody className="popup-background">
                <Styled.Popup>
                  <Styled.PopupCloseButton
                    onClick={() => setIsPopupOpen(false)}
                  >
                    ×
                  </Styled.PopupCloseButton>

                  <Styled.PopupBody>
                    <Styled.UserPicture
                      src={userDetails.picture}
                      alt="User picture"
                      referrerPolicy="no-referrer"
                    />

                    <Styled.UserProperty>
                      <Styled.UserPropertyName>Name:</Styled.UserPropertyName>
                      <Styled.UserPropertyValue>
                        {userDetails.name}
                      </Styled.UserPropertyValue>
                    </Styled.UserProperty>

                    <Styled.UserProperty>
                      <Styled.UserPropertyName>E-Mail:</Styled.UserPropertyName>
                      <Styled.UserPropertyValue>
                        {userDetails.email}
                      </Styled.UserPropertyValue>
                    </Styled.UserProperty>

                    <Styled.UserProperty>
                      <Styled.UserPropertyName>
                        Wallet Address:
                      </Styled.UserPropertyName>
                      <Styled.UserPropertyValue>
                        {userDetails.walletAddress}

                        <Styled.UserAddressCopyButton
                          role="button"
                          src="./copy.svg"
                          alt="Copy contract ID"
                          onClick={handleCopy}
                          referrerPolicy="no-referrer"
                        />
                      </Styled.UserPropertyValue>
                    </Styled.UserProperty>

                    <Styled.ViewTransactionsButton
                      href={`https://sonar.warp.cc/#/app/contract/${userDetails.walletAddress}`}
                      target="_blank"
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
    </Styled.NavBarContainer>
  );
};

export default Nav;
