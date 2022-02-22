import React, { Component } from "react";
import "./Information.css";
import Email from './Email';
import Slider from './Slider';

import Fade from 'react-reveal/Fade';


export default class Information extends Component {


  render() {

    return (
      <>
        <div className="section" id="home">
          
        

          <Fade top>

            <div className="container">
                <div className="container">
                <h1>Gokul Wholesale</h1>

                  <p>Somes content goes here....</p>
                </div>
            </div>
          </Fade>
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
