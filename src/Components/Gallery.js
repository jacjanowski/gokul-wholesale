import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../photo";

export default class Header extends Component {
  render() {
    return <Gallery photos={photos} />;
  }
}
