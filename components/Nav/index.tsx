import * as Styled from './styles';
import { DMSans700 } from '../../utils/fonts';
import Button from '../Button'

const Nav = () => {
  return (
    <Styled.NavBar>
      <Styled.NavLogo>
        <div className='toggle'>
          <div></div>
        </div>
        <p className={DMSans700.className}>Othent</p>
      </Styled.NavLogo>

      <Styled.Menu>
        <a href='' className={`${DMSans700.className} devs`}>
          Developers
        </a>
        <a href='/blog' className={DMSans700.className}>
          Blog
        </a>
        <Button>Contact Us</Button>
      </Styled.Menu>
    </Styled.NavBar>
  );
};

export default Nav;
