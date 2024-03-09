import React from 'react'
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <div className='footerMainContainer'>
      <div className='iconsContainer'>
      <InstagramIcon />
      <TwitterIcon />
      <LinkedInIcon/>
      <FacebookIcon/>
      </div>

      <p>moraswi-food est 2024-march</p>
    </div>
  )
}
