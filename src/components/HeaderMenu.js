import './HeaderMenu.css'
import Burger from "./Burger"
const HeaderMenu = () => {
    return (
      <div className='header'>
       <svg><use href={Burger}></use></svg>
      </div>
    );
  };
  
  
 
  export default HeaderMenu;