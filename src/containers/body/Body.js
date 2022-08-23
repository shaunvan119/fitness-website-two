import React from 'react'
import './body.css'
import { BiTimeFive } from 'react-icons/bi';
import {BiHome} from 'react-icons/bi';
import GridPics from '../../components/GridPics';


const Body = () => {
  return (

    <div className="body-main">
    
    <div className='body-wrapper'>
    
        <div className="bodyinfo-title">
        <BiTimeFive size={70}/>
        <h1 className="body-h1">Workout anywhere</h1>
        <p className="body-p">Access to 1000s online workouts,<br/>workouts on demand<br/> anytime.</p>
        </div>
        <div className="bodyinfo-title">
        <BiHome size={70}/>
        <h1 className="body-h1">Home workouts</h1>
        <p className="body-p">Access on any device,<br/>home workouts and <br/>gym based</p>
        </div>
        <div className="bodyinfo-title">
        <BiTimeFive size={70}/>
        <h1 className="body-h1">Workout your way</h1>
        <p className="body-p">Choose a workout plan that works for you, <br/>choose from over thousands<br/> of online plans.</p>
        
        </div>

       
       
    </div>
    <h1 className="community-h1">Be part of a fit community</h1>
     <div className='grid-section'>
        <GridPics/>
        </div>
    </div>
  )
}

export default Body