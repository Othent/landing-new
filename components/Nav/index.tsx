import * as Styled from "./styles";
import { DMSans700 } from "../../utils/fonts";

const Nav = () => {
  return (
    <Styled.NavBarContainer>
      <Styled.Banner>
        <span>
          <strong>Othent</strong> is deprecated.&nbsp;
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
        </Styled.Menu>
      </Styled.NavBar>
    </Styled.NavBarContainer>
  );
};

export default Nav;
