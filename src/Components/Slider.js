import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";



let imgs = [
  "gokul-images/cup1.JPG",
  "gokul-images/cup2.JPG",
  "gokul-images/cup3.JPG",
  "gokul-images/pacific1.JPG",
  "gokul-images/pacific2.JPG",
  "gokul-images/pacific3.JPG",
  "gokul-images/sanitizer1.JPG",
  "gokul-images/sanitizer2.JPG",
  "gokul-images/sanitizer3.JPG",
  "gokul-images/blunt.JPG",
  "gokul-images/satya2.JPG",
  "gokul-images/satya3.JPG",
  "gokul-images/beer1.JPG",
  "gokul-images/beer2.JPG",
  "gokul-images/beer3.JPG",
  "gokul-images/soap1.JPG",
  "gokul-images/soap2.JPG",
  "gokul-images/soap3.JPG"
];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2, 
            slidesToScroll: 2,
          }
        },
      ],
    };
    return (
      <div id="carousel">
        <h1>Some of Our Merchandise</h1>
        <Slider {...settings}>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[0]} alt="NFT"  decoding="async"/>
              <p>16oz. Solo Cup</p>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[1]} alt="NFT" decoding="async" />
              <p>16 count, 16oz.</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[2]} alt="NFT"  decoding="async"/>
              <p>20 count, 2oz.</p>
            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[3]} alt="NFT" decoding="async"/>
              <p>300 count, 12oz.</p>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[4]} alt="NFT" decoding="async"/>
              <p>20 count, 12oz.</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[5]} alt="NFT" decoding="async"/>
              <p>252 count, 16oz.</p>
            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[6]} alt="NFT" decoding="async"/>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[7]} alt="NFT" decoding="async"/>
              <p>100mL Hand Sanitizers</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[8]} alt="NFT" decoding="async"/>
            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[9]} alt="NFT" decoding="async"/>
              <p>Blunt Aroma</p>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[10]} alt="NFT" decoding="async"/>
              <p>Satya Nag Champa</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[11]} alt="NFT" decoding="async"/>
              <p>Incense</p>
            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[12]} alt="NFT" decoding="async"/>
              <p>6-pack Beer Rings</p>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[13]} alt="NFT" decoding="async"/>
              <p>6-pack Beer Caps</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[14]} alt="NFT" decoding="async"/>
              <p>6-pack Beer Holder</p>
            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[15]} alt="NFT" decoding="async"/>
              <p>Variety of Flavors</p>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[17]} alt="NFT" decoding="async"/>
              <p>200mL Hand Soap</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[16]} alt="NFT" decoding="async" />
              <p>Aqua, Mango, and Rose</p>
            </h3>
          </div>{" "}
        </Slider>
      </div>
    );
  }
}
