import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { bags } from "../bag";
import { cups } from "../cups";
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
          <p>Sizes include 1/6, 1/8, 1/9</p>
          <p>Single Bottle size</p>
          <p>27 Jumbo & 36 Jumbo sizes</p>
        </Fade>

        <Gallery photos={bags} />

        <Fade right>
          <h1>Plastic Cups</h1>
          <p>20 count 2oz</p>
          <p>200 count, 5pk 7oz</p>
          <p>300 count 12oz</p>
          <p>252 count, 5pk 16oz</p>
        </Fade>

        <Gallery photos={cups} />

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
