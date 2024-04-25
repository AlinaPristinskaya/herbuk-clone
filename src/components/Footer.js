import './Footer.css'
import dowload from "./app-store-png-logo-33115.png"
import Link from './Link.js'

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
         <Link name="facebook"></Link>
         <Link name="instagram"></Link>
         <Link name="twitter"></Link>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;


// the footer passes props to the Link component
// The Link component draws the required image based on the condition