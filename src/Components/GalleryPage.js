import React, { Component } from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "../bag";

export default class GalleryPage extends Component {
  render() {
    return (

      <div>
        <h1>Here is row one</h1>
        <p>Some of our bages are here</p>
        <p>p dag with e dan</p>
        <Gallery photos={photos} />
        <h1>Here is the second row.</h1>
        <Gallery photos={photos} />


      </div>

    );
  }
}
