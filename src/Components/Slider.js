import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css';



let imgs = [
  "gokul-images/DSC_7779.jpg",
  "gokul-images/DSC_7801.jpg",
  "gokul-images/DSC_7802.jpg",
  "gokul-images/DSC_7803.jpg",
  "gokul-images/DSC_7804.jpg",
  "gokul-images/DSC_7805.jpg",
  "gokul-images/DSC_7806.jpg",
];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="carousel" style={{ width: "85%", margin: "auto" }}>

        <Slider {...settings}>
          <div>
            <img style={{ borderRadius: "15px" }} src={imgs[0]} alt="NFT" />
          </div>
          <div>
            <img style={{ borderRadius: "15px" }} src={imgs[1]} alt="NFT" />
          </div>
          <div>
            <img style={{ borderRadius: "15px" }} src={imgs[2]} alt="NFT" />
          </div>
          <div>
            <img style={{ borderRadius: "15px" }} src={imgs[3]} alt="NFT" />
          </div>
          <div>
            <img style={{ borderRadius: "15px" }} src={imgs[4]} alt="NFT" />
          </div>
          <div>
            <img style={{ borderRadius: "15px" }} src={imgs[5]} alt=" NFT" />
          </div>
          <div>
            <img style={{ borderRadius: "15px" }} src={imgs[6]} alt=" NFT" />
          </div>
        </Slider>
      </div>
    );
  }
}
