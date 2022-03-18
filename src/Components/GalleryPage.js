import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { bags } from "../bag";
import { cups } from "../cups";
import { cups2 } from "../cups2";
import { satya } from "../satya";
import { rest } from "../rest";
import "./GalleryPage.css";
import Fade from "react-reveal/Fade";

export default class GalleryPage extends Component {
  render() {
    return (
      <div id="gallery">
        <Fade left>
          <h1>Variety of Bag Sizes</h1>
          <p>Sizes include 1/6, 1/8, 1/9, 1/10</p>
          <p>27 Jumbo & 36 Jumbo sizes</p>
          <p>Single Bottle size</p>
          <p>1000 Count</p>

        </Fade>

        <div className="bag-container">
          <img width="100%" height="auto" src="gokul-images/bags1.jpg" />
          <div>
            <h2>1/6 <br/> White</h2>
            <h2>1/8 <br/> Black</h2>
            <h2>1/9 <br/> Black/White</h2>
            <h2>1/6 1000ct.<br/> White</h2>
          </div>
          <img width="100%" height="auto" src="gokul-images/bags2.jpg" />
          <div>
            <h2>1/6 <br/> Black</h2>
            <h2>1/10 <br/> Black</h2>
            <h2>Single <br/> Bottle</h2>
            <h2>1000 ct. <br/> Black/White</h2>
          </div>
          <img width="100%" height="auto" src="gokul-images/pacificBags.jpg" />
        </div>




        <Fade right>
          <h1>Plastic Cups</h1>
          <p>20 count 2oz</p>
          <p>200 count, 5pk 7oz</p>
          <p>300 count 12oz</p>
          <p>252 count, 5pk 16oz</p>
        </Fade>


        <Gallery photos={cups} />
        <Gallery photos={cups2} />

        <Fade left>
          <h1>Nag Champa Incense & Blunt Aroma</h1>
          <p>Dozens of flavors</p>
          <p>Gokul Wholesale branded</p>
          <p>Traditionally hand rolled in India</p>
        </Fade>

        <Gallery photos={satya} />

        <Fade right>
          <h1>More of What We Offer</h1>
          <p>Beer rings, lids, and holders</p>
          <p>Wine Corkscrews</p>
          <p>Hand Sanitizers</p>
          <p>Toilet Paper</p>
        </Fade>

        <Gallery photos={rest} />
      </div>
    );
  }
}
