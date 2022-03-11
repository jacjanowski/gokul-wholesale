import React, { Component } from "react";
import "./Information.css";
import Email from "./Email";
import Slider from "./Slider";
import Header from "./Header";
import { photos } from "../bag";
import Fade from "react-reveal/Fade";
import Gallery from "react-photo-gallery";
import GalleryPage from "./GalleryPage";
import DownScroll from "./DownScroll";

let logo = "gokul-images/logo.png";

export default class Information extends Component {
  render() {
    return (
      <>
        <div className="section" id="home">
          <Fade top>
            <div className="container">
              
              <h1>Gokul Wholesale</h1>

              <img id="logo" src={logo} />
              <DownScroll />
            </div>
          </Fade>
        </div>
        <Header />
        <div className="section" id="about">
          <div className="container">
            <Slider />
            <GalleryPage />
          </div>
        </div>

        <div className="section" id="contact">
          <div className="container">
            <Fade top>
              <h1 style={{ color: "white" }}>Contact Us</h1>
            </Fade>
            <Email />
          </div>
        </div>
      </>
    );
  }
}
