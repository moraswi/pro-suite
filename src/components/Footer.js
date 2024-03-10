import React from 'react'
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import whiteLogo from '../assets/whiteLogo.png';

export default function Footer(){
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className='requestDemoContainer'>
        <div className='subRequestDemoContainer'>
          <h1 className='footerTitle'>We'd love to show you how our solution works</h1>
          <button className='buttonReq'>REQUEST A DEMO</button>
        </div>
      </div>

      <div className='subFootMainContainer'>
      <div className="footerContent">
        <div className="footerColumn1">
          <img
            src={whiteLogo}
            alt="ProSuite Logo"
            className="whiteLogo"
          />
          <p className='footerItem'>
            ProSuite is a suite of cloud-based platforms which aims to transform
            and automate enterprise tasks. Our solutions prioritize user
            experience and provide easy-to-use tools, including Asset Management,
            Risk Management, and Performance Management.
          </p>
        </div>
        <div className="footerColumn2">
          <h2 className='subTitles'>Services</h2>
          <label>ProSuite Risk</label>
          <label>ProSuite Docs</label>
          <label>ProSuite Asset</label>
          <label>ProSuite Performance</label>
    
        </div>
        <div className="footerColumn3">
          <h2 className='subTitles'>Learn</h2>
          <a className="label" href="/#home"> Home</a>
          <a className="label" href="/#about-us"> <label>About</label></a>
          <a className="label" href="/#solution"> <label>Solutions</label></a>
          <label>Contact</label>
          <label>Request Demo</label>
        </div>
        <div className="footerColumn4">
          <h2 className='subTitles'>Contact Us</h2>
         <p className='footerItem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia morbi praesent nulla tempor sagittis. Curabitur donec cursus donec risrdum nullam orci sit dictum. Molestie nunc sed amet vulputate in. Condimentum mi massa id interdum risus, tortor nunc mauris.</p>
        </div>
      </div>

      <div className='bottomFooterRow'>
        <div className='privacyContainer'>
          <p className="footer-copyright">
            2024 © {year} ProSuite. All rights reserved.
          </p>
          <p>Privacy Policy</p>
        </div>

        <div className='socialMediaLogo'>
          <TwitterIcon className='socialLogoItem'/>
          <FacebookIcon className='socialLogoItem'/>
          <InstagramIcon className='socialLogoItem'/>
          <GitHubIcon className='socialLogoItem'/>
        </div>
      </div>
      </div>
    </footer>
  );
};