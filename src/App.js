

// external stylesheet link 
import "./css/Main.css";

import "./css/Header1.css";

import "./css/Searchbar.css";

// import "./css/Header.css";

// import "./css/Header_swiper-bundle.min.css";

// import "./css/Pages_header.css";

// import "./css/Jquery-ui.css";

import "./css/About1B_slide.css";

import "./css/AboutCarousel.css";

import "./css/Products.css";

import "./css/Art-carousel - Copy.css";

import "./css/Blog-carousel.css";

import "./css/Bmi_calculator.css";

import "./css/Bootstrap.css";

import "./css/C_about_page_design.css";

import "./css/C_business_engage.css";

import "./css/C_quick_appoinment.css";

import "./css/Find_doctor_and_request_appoinment.css";

import "./css/Form - Copy.css";

// import "./css/Lightslider.css";  

import "./css/Modal.css";  

import "./css/NewBlogCarousel.css";  

import "./css/Reset.css"; 

import "./css/Searchmodal.css";

import "./css/Subscribe-input-type-style.css"; 

import "./css/Text-slide-main.css"; 

import "./css/Verticaltestimonialslides.css"; 

import "./css/FooterslideShow1.css";

import "./css/Footer.css";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import website componenet
// import { Header } from "./Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Navbarmenu from './components/Navbarmenu';

function App() {

  return (

    <div className="App">
      
      {/** header Router */}

      <Router>

        {/**website header */}
        <Navbarmenu />
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>

      </Router>



      {/**website footer */}
      <Footer/>

    </div>
  );
}

export default App;
