import React, { Component } from "react";
import { Link } from "react-scroll";
import { FaChevronCircleDown } from "react-icons/fa";
import "./DownScroll.css";

export default class DownScroll extends Component {
  render() {
    return (
      <div className="down-arrow">
        <Link to="nav" spy={true} smooth={true}>
          <FaChevronCircleDown />
        </Link>
      </div>
    );
  }
}
