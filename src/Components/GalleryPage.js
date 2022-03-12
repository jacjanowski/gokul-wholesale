import React, { Component } from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { bags } from "../bag";
import { cups } from '../cups';
import './GalleryPage.css';
import Fade from "react-reveal/Fade";


export default class GalleryPage extends Component {
  render() {
    return (

      <div id="gallery">

        <Fade left>
          <h1>List of bags</h1>
          <p>Sizes include 1/6, 1/8, 1/9</p>
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

      </div>

    );
  }
}
