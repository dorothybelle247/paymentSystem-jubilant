import React from 'react';
import Footer from './Footer';
import Gallery2 from './Gallery2';
import Navbar from './Navbar';
import PopUp3 from './PopUp3';

import "../css/bootstrap.css"
import "../css/flexslider.css"
import "../css/popup-box.css"
import "../css/style.css"

const CommonDrones = () => {
  return (
    <div>
      <Navbar/>
      <Gallery2/>
      <PopUp3/>
      <Footer/> 
    </div>
  );
}

export default CommonDrones;
