

import './grid.css'
import gymone from "../assets/gymone.png"


export default function GridPics() {
  return (

    <div className="grid-wrapper">
    <img className="grid-image" src={gymone} alt="Logo" />
    <img className="grid-image grid-image-right" src={gymone} alt="Logo" />
    <img className="grid-image grid-image-left" src={gymone} alt="Logo" />
    <img className="grid-image " src={gymone} alt="Logo" />
    <img className="grid-image grid-image-left" src={gymone} alt="Logo" />
    <img className="grid-image" src={gymone} alt="Logo" />
    </div>
  );
}







