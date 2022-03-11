import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Email() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setMessage("");
    emailjs
      .sendForm(
        "service_l33s7b5",
        "template_5qgy8tg",
        "#contact-form",
        "user_Qk53rvtmKogW6pqRTf45w"
      )
      .then(
        (result) => {
          setStatus(true);
          console.log(result.text);
        },
        (error) => {
          setStatus(false);
          console.log(error.text);
        }
      );
  };

  const test = (e) => {
    e.preventDefault();
    setStatus(true);
    setEmail("");
    setName("");
    setMessage("");
  };

  let alertMessage = (
    <div id="alertMessage">
      <p>You have successfully sent your email!</p>
    </div>
  );

  // let errorMessage = (
  //   <div id="errorMessage">
  //   <p>There was a problem sending your email.</p>
  // </div>
  // )

  return (
    <div className="row">
      <Fade left cascade>
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
          <h2>Hours</h2>
          <div>
            
            <p className="weekend-hour">Monday - Friday: 9:00am - 6:00pm CST</p>
             <p ><FaClock /> Saturday: 10:00am - 4:00pm CST</p>
             <p className="weekend-hour">Sunday: Closed</p>
          </div>
        </div>
      </Fade>

      {/* id="contact-form" ref={form} onSubmit={sendEmail} */}
      <div className="column" id="form-container">
        {status && alertMessage}
        <Fade right cascade>
          <form id="contact-form" ref={form} onSubmit={test}>
            <input
              className="form-input"
              type="text"
              name="user_name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
            <input
              type="email"
              className="form-input"
              name="user_email"
              required={true}
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              id="textarea"
              name="message"
              placeholder="How can we help you?"
              required={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
