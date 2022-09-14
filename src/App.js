import Header from "./containers/header/Header";
import Body from "./containers/body/Body";
import Footer from "./containers/footer/Footer";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";



function App() {
  return (
    <div className="App">
    <Routes>
     <Route exact path="/" element={[<Header/>,<Body/>,<Footer/>]}/>
      <Route path="/contactUs" element={<ContactForm/>}/>
    </Routes>
    </div>
  );
}

export default App;
