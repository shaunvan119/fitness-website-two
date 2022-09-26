
import React from 'react'
import logo from '../../assets/DaniMarci.png'
import './footer.css'
import { AiFillFacebook,AiFillLinkedin,AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';




const Footer = () => {
  return (
    <div className='footer-wrapper'>
    <img className="footer_image" src={logo} alt="Logo" />
    <h2 className='copy_right'>© DaniMarci.com, Inc. All rights reserved.</h2>
    <div className='socail-icons'>
    <AiFillFacebook size={60}/>
    <AiFillLinkedin size={60}/>
    <AiFillInstagram size={60}/>
    <AiFillTwitterCircle size={60}/>
    </div>
    </div>
  )
}

export default Footer