import './Header.css'
import HeaderMenu from './HeaderMenu'
import HeaderLogo from './HeaderLogo'
import HeaderAuto from './HeaderAuto';

const Header = () => {
  return (
    <div className='header'>
     <div className='header-item'>
      <HeaderMenu></HeaderMenu>
      <HeaderLogo></HeaderLogo>
     </div>
    
     <HeaderAuto></HeaderAuto>
    </div>
  );
};



export default Header;