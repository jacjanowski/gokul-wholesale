import React, { Component } from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "../bag";

export default class GalleryPage extends Component {
  render() {
    return (

      <div>

        <Gallery photos={photos} />

        <Gallery photos={photos} />


      </div>

    );
  }
}
