import React from 'react'
import { FaInstagram, FaTwitter, FaSnapchat } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <ul className='socialButton'>
          <li>
              <a href="https://www.instagram.com" target="_blank">
                <FaInstagram />
              </a>               
          </li>
          <li>
              <a href="https://twitter.com" target="_blank">
                <FaTwitter />
              </a>               
          </li>
          <li>
              <a href="https://www.snapchat.com/" target="_blank">
                <FaSnapchat />
              </a>               
          </li>
      </ul>
      <p> © جميع الحقوق محفوظة لدى كالبنيان المرصوص ..
            المملكة العربية السعودية - الرياض</p>
    </footer>
  )
}

export default Footer