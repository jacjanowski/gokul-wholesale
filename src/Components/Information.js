import React, { Component } from "react";
import "./Information.css";
import Email from './Email';

import Fade from 'react-reveal/Fade';


export default class Information extends Component {


  render() {

    return (
      <>
        <div className="section" id="home">
          
          <Fade top>

            <div className="container">
              <h1>Gokul Wholesale</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus. Totam nihil similique a repellat minus dolor amet
              quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
              minima animi.
            </div>
          </Fade>
        </div>
        <div className="section" id="about">
          <div className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus. Totam nihil similique a repellat minus dolor amet
            quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
            minima animi.
        

          </div>
        </div>
        <div className="section" id="contact">
          <div className="container">
            <h1>Contact Information</h1>
          <Email />
          </div>
        </div>

        
      </>
    );
  }
}
