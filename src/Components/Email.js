import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Email() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email, password);
  //   // clearing the values
  //   setEmail("");
  //   setPassword("");
  // }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    emailjs
      .sendForm(
        "service_l33s7b5",
        "template_5qgy8tg",
        "#contact-form",
        "user_Qk53rvtmKogW6pqRTf45w"
      )
      .then(
        (result) => {
         
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const test = (e) => {
  //   alert("Email has been sent!");
  // };

  return (
    <div className="row">
      <Fade bottom cascade>
        <div className="column">
          <h2>Address</h2>
          <p>
            {" "}
            <FaMapMarkerAlt /> 1141 W. Bryn Mawr Ave. Itasca, IL 60191
          </p>
          <h2>Phone</h2>
          <p>
            <FaPhone /> <a href="tel:630-540-9910">(630) 540-9910</a>
          </p>
          <h2>Email</h2>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto: jacobjanowski.uic@gmail.com">
              harsh@gokulwholesaleinc.com
            </a>{" "}
          </p>
        </div>
      </Fade>

      {/* id="contact-form" ref={form} onSubmit={sendEmail} */}
      <div className="column">
        <Fade right cascade>
          <form  id="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              className="form-input"
              type="text"
              name="user_name"
              placeholder="Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <input
              type="email"
              className="form-input"
              name="user_email"
              required={true}
              placeholder="Email Address"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <textarea
              id="textarea"
              name="message"
              placeholder="How can we help you?"
              required={true}
            />
            <input
              id="sendBtn"
              type="submit"
              className="form-input"
              value="Send"
              
            />
          </form>
        </Fade>
      </div>
    </div>
  );
}
