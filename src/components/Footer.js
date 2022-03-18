import React from 'react';

import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import MobileStoreButton from "react-mobile-store-button";



function Footer() {
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
             
          </p>
        </section>
        <div className="Apps">
        <div className="AppOS">
          
      <MobileStoreButton
        store="ios"
        url={iOSUrl}
        linkProps={{ title: "iOS Store Button" }}
      /></div>
       <div className="Appand">
      <MobileStoreButton
        store="android"
        url={iOSUrl}
        linkProps={{ title: "android Store Button" }}
      />
      </div>
      </div>

        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>



              <Link to='/' className='social-logo'>
                  <img src='/images/kopii-logo21.png'></img>
              </Link>
            </div>
            <small class='website-rights'>© 2021 kopii. All Rights Reserved.</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;