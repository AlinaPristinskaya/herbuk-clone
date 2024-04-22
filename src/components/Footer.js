import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <div className='logo'>Postmates</div>
          <div>
            <p>img appStore</p>
            <p>img googleplay</p>
          </div>
        </div>
        
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <hr className='footerHr'></hr>
      <div>
        <div>
          <a>link fb</a>
          <a>linf twitter</a>
          <a>lint inst</a>
        </div>
        <div>
          <div>
          <ul>
            <li >Privasy Policy</li>
            <li>Terms</li>
            <li>Prising</li>
            <li>Do not sell or share my personal information</li>
          </ul>
          </div>
          <div>
            <p>This site is protected by reCAPTCHA and the Google<a>Privacy Policy</a>and<a>Terms of Service</a> apply. </p>
            <p>© 2024  Postmates Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
