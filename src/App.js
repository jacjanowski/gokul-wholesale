import React, { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Fade from "react-reveal/Fade";
import Header from './Components/Header'
import Information from './Components/Information'
import Slider from './Components/Slider';

export default class App extends Component {
  render() {
    return (
      <>
       <Header/>
      <Information/>
      <Slider />
      </>
    )
  }
}