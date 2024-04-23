import './Footer.css'
import Fb from './Fb.js'
import Twitter from './Twitter.js'
import Inst from './Inst.js'
import Icon from './Icon.js'
import dowload from "./app-store-png-logo-33115.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className='footerFlex'>
        <div className='flexFirst'>
          <div className='logo'>Postmates</div>
          <div className='flexIcon'>
            <img alt="dowload" height={40} src={dowload}></img>
          </div>
        </div>
        
        <div className='flexList'>
          <ul className='list'>
            <li><a>Get Help</a></li>
            <li><a>Buy gift cards</a></li>
            <li><a>Add your restaurant</a></li>
            <li><a>Sign up to deliver</a></li>
            <li><a>Save on your first order</a></li>
            
          </ul>
          <ul className='list'>
            <li><a>Nearby restaurants</a></li>
            <li><a>View all cities</a></li>
            <li><a>Pickup near me</a></li>
            <li><a>English</a></li>
          </ul>
        </div>
      </div>
      <hr className='footerHr'></hr>
      <div className='footerEnd'>
        <div>
         <a className='socLink'><Fb></Fb></a>
         <a className='socLink'><Twitter></Twitter></a>
         <a><Inst></Inst></a>
        </div>
        <div className='info'>
          <ul className='listAbout'>
            <li >Privasy Policy</li>
            <li>Terms</li>
            <li>Prising</li>
            <li>Do not sell or share my personal information</li>
          </ul>
          <div className='listAbout'>
            <p>This site is protected by reCAPTCHA and the Google<a>Privacy Policy</a>and<a>Terms of Service</a> apply. </p>
            <p>© 2024  Postmates Inc.</p>
          </div>
          <div> Iconki <Icon id="icon-facebook" classname="sprite"></Icon>
          Iconki <Icon id="icon-instagram" classname="sprite"></Icon>
          Iconki <Icon id="icon-twitter" classname="sprite"></Icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


