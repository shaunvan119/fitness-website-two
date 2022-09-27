
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
    <a href="https://www.facebook.com/"><AiFillFacebook size={60}/></a>
    <a href="https://au.linkedin.com/"><AiFillLinkedin size={60}/></a>
    <a href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13534421678&extra_1=s|c|547401883169|e|instagram%20%27|&placement=&creative=547401883169&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13534421678%26adgroupid%3D126262407734%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9071351%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwvsqZBhAlEiwAqAHElT3_EjymgnBYognjHTa4Ib5r_CZOo8uTc_i73NK5mK5kOKTSZjyothoCBgwQAvD_BwE"><AiFillInstagram size={60}/></a>
    <a href="https://twitter.com/?lang=en"><AiFillTwitterCircle size={60}/></a>
    </div>
    </div>
  )
}

export default Footer