

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
        <div class="text">Hello World</div>
      </div>
  </div>
  <div class="container">
      <img className="grid-image grid-image-right" src={gymtwo} alt="Logo" />
      <div class="overlay overlay-right">
      <div class="text">Hello World</div>
    </div>
    </div>
    <img className="grid-image grid-image-left" src={gymthree} alt="Logo" />
    <img className="grid-image " src={gymfour} alt="Logo" />
    <img className="grid-image grid-image-left" src={gymfive} alt="Logo" />
    <img className="grid-image" src={gymsix} alt="Logo" />
    
    </div>
  );
}







