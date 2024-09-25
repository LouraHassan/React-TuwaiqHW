import React from 'react'
import FooterIcon from './FooterIcon';
import logo from "../assets/logo-h-white.png";
import logo2 from "../assets/logo-2.svg"
import twitter from "../assets/brand-x.png"
import snap from "../assets/brand-snapchat.png"
import link from "../assets/brand-linkedin.png"
import meta from "../assets/brand-meta.png"
import youtube from "../assets/brand-youtube.png"

function Footer() {
  return (
    <footer>
          <div className='d-flex flex-lg-row flex-md-row flex-column w-75 justify-content-evenly align-items-center'>
              <img src={logo} alt="" />
              <ul>
                  <li>شارك كمدرب</li>
                  <li>حول الأكاديمية</li>
              </ul>
              <ul>
                  <li>الشروط والأحكام</li>
                  <li>سياسة الخصوصية</li>
              </ul>
              <div className='d-flex flex-column align-items-center'>
                  <div className='d-flex flex-row'>
                      <FooterIcon icon={link}></FooterIcon>
                      <FooterIcon icon={twitter}></FooterIcon>
                      <FooterIcon icon={snap}></FooterIcon>
                      <FooterIcon icon={youtube}></FooterIcon>
                      <FooterIcon icon={meta}></FooterIcon>

                  </div>
                  <p>@TuwaiqAcademy</p>
              </div>
              <img src={logo2} alt="" />
          </div>
          <p>&copy; جميع الحقوق محفوظة لأكاديمية طويق {new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer
