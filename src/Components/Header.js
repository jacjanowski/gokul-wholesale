import React, { Component } from "react";
import { Link } from "react-scroll";
import './Header.css';

export default class Header extends Component {
  render() {
      
    return (
      <ul className="navbar" id="navbar">
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="service" spy={true} smooth={true}>
            Service
          </Link>
        </li>
      </ul>
    );
  }
}
