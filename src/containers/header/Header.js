import React from 'react'
import './header.css'
import videoBg from "../../assets/videoBgtwo.mp4"

const Header = () => {
  return (
    <div className='main-header '>
    <video src={videoBg} autoPlay loop muted className='vid'/>
    </div>
  )
}

export default Header