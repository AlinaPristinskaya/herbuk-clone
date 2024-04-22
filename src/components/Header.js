import './Header.css'
import HeaderMenu from './HeaderMenu'
import HeaderLogo from './HeaderLogo'
import HeaderAuto from './HeaderAuto';

const Header = () => {
  return (
    <div className='header'>
     <div>
      <HeaderMenu></HeaderMenu>
      <HeaderLogo></HeaderLogo>
     </div>
     <div>
     </div>
     <HeaderAuto></HeaderAuto>
    </div>
  );
};



export default Header;