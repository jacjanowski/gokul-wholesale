import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";

let imgs = [
  "gokul-images/cup1.jpg",
  "gokul-images/cup2.jpg",
  "gokul-images/cup3.jpg",
  "gokul-images/pacific1.jpg",
  "gokul-images/pacific2.jpg",
  "gokul-images/pacific3.jpg",
  "gokul-images/sanitizer1.jpg",
  "gokul-images/sanitizer2.jpg",
  "gokul-images/sanitizer3.jpg",
  "gokul-images/blunt.jpg",
  "gokul-images/satya2.jpg",
  "gokul-images/satya3.jpg",
  "gokul-images/beer1.jpg",
  "gokul-images/beer2.jpg",
  "gokul-images/beer3.jpg",
  "gokul-images/soap1.jpg",
  "gokul-images/soap2.jpg",
  "gokul-images/soap3.jpg"
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
      ],
    };
    return (
      <div id="carousel">
        <h1 style={{color: 'white'}}>Our Products</h1>
        <Slider {...settings}>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[0]} alt="NFT" />
              <p>16oz. Solo Cup</p>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[1]} alt="NFT" />
              <p>16 count, 16oz.</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[2]} alt="NFT" />
              <p>20 count, 2oz.</p>
            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[3]} alt="NFT" />
              <p>300 count, 12oz.</p>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[4]} alt="NFT" />
              <p>20 count, 12oz.</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[5]} alt="NFT" />
              <p>252 count, 16oz.</p>
            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[6]} alt="NFT" />
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[7]} alt="NFT" />
              <p>100mL Hand Sanitizers</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[8]} alt="NFT" />
            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[9]} alt="NFT" />
              <p>Blunt Aroma</p>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[10]} alt="NFT" />
              <p>Satya Nag Champa</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[11]} alt="NFT" />
              <p>Incense</p>
            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[12]} alt="NFT" />
              <p>6-pack Beer Rings</p>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[13]} alt="NFT" />
              <p>6-pack Beer Caps</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[14]} alt="NFT" />
              <p>6-pack Beer Holder</p>
            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[15]} alt="NFT" />
              <p>Variety of Flavors</p>
            </h3>
          </div>
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[17]} alt="NFT" />
              <p>200mL Hand Soap</p>

            </h3>
          </div>{" "}
          <div>
            <h3>
              <img style={{ borderRadius: "15px" }} src={imgs[16]} alt="NFT" />
              <p>Aqua, Mango, and Rose</p>
            </h3>
          </div>{" "}
        </Slider>
      </div>
    );
  }
}
