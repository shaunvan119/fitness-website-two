import React from 'react'
import './header.css'
import videoBg from "../../assets/videoBgtwo.mp4"

const Header = () => {
  return (
    <div className='main-header'>
    
  
    <div className='overlay'></div>
    
  
    <video src={videoBg} autoPlay loop muted/>
    <div className="content">


    </div>
    
    </div>
  )
}

export default Header