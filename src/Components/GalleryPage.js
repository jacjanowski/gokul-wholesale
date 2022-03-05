import React, { Component } from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "../photo";

export default class GalleryPage extends Component {
  render() {
    return <Gallery photos={photos} />;
  }
}
