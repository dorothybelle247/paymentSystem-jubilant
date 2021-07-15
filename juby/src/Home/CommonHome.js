import React from 'react';
import Header from './Header';
import Footer from './Footer';
import More from './More6';
import NewDrones from './NewDrones5';
import Services4 from './Services4';
import Home from './Slider2';
import Trend3 from './Trend3';

import "../css/bootstrap.css"
import "../css/flexslider.css"
import "../css/popup-box.css"
import "../css/style.css"


const CommonHome = () => {
  return (
    <div>
    <Header/>
    <Home/>
    <Trend3/>
    <Services4/>
    <NewDrones/>
    <More/>
    <Footer/>
    </div>
  );
}

export default CommonHome;
