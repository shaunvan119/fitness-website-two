

import './grid.css'
import gymone from "../assets/gymone.png"
import gymtwo from "../assets/gymtwo.png"
import gymthree from "../assets/gymthree.png"
import gymfour from "../assets/gymfour.png"
import gymfive from "../assets/gymfive.png"
import gymsix from "../assets/gymsix.png"


export default function GridPics() {
  return (

    <div className="grid-wrapper">
    <div class="container">
        <img className="grid-image" src={gymone} alt="Logo" />
        <div class="overlay">
        <div class="text">We love being part of a online fit community</div>
      </div>
  </div>
  <div class="container">
      <img className="grid-image grid-image-right" src={gymtwo} alt="Logo" />
      <div class="overlay overlay-right">
      <div class="text">Online support pushed me to the next level</div>
    </div>
    </div>
     <div class="container">
    <img className="grid-image grid-image-left" src={gymthree} alt="Logo" />
    <div class="overlay overlay-left">
      <div class="text">The online diet plans gave me structure</div>
    </div>
    </div>
    <div class="container">
    <img className="grid-image " src={gymfour} alt="Logo" />
    <div class="overlay overlay-right-two">
      <div class="text">I enjoy the online community chat for tips</div>
    </div>
    </div>
    <div class="container">
    <img className="grid-image grid-image-left" src={gymfive} alt="Logo" />
    <div class="overlay overlay-left-two">
      <div class="text">We love the gym based online team workouts</div>
    </div>
    </div>
    <div class="container">
    <img className="grid-image" src={gymsix} alt="Logo" />
    <div class="overlay overlay-right-three">
      <div class="text">The online programs are easy to follow</div>
    </div>
   </div>
    </div>
  );
}







