import React, { Component } from "react";
import "./Information.css";
import Email from './Email';
import Slider from './Slider';
import Header from './Header';

import Fade from 'react-reveal/Fade';

let logo = "gokul-images/logo.png";

export default class Information extends Component {

  render() {

    return (
      <>
        <div className="section" id="home">

          <div className="container">
          <h1>Gokul Wholesale</h1>


            <img id="logo" src={logo} />
            <Header />

          </div>

        </div>

        <div className="section" id="about">
          <div className="container">
            <h1>Here</h1>
            <Slider />
          </div>
        </div>

        <div className="section" id="contact">
          <div className="container">
            <h1>Contact Us</h1>
            <Email />
          </div>
        </div>


      </>
    );
  }
}
