import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css';
import { FaMapMarkerAlt,FaPhone, FaEnvelope } from "react-icons/fa";

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l33s7b5', 'template_5qgy8tg', form.current, 'user_Qk53rvtmKogW6pqRTf45w')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="row">
            <div className="column">
                <h2>Address</h2>
                <p> <FaMapMarkerAlt /> 1141 W. Bryn Mawr Ave. Itasca, IL 60191</p>
                <h2>Email</h2>
                <p><FaPhone /> <a href='tel:630-540-9910' >(630) 540-9910</a></p> 
                <h2>Phone</h2>
                <p><FaEnvelope /> <a href="mailto: jacobjanowski.uic@gmail.com">harsh@gokulwholesaleinc.com</a> </p>
                
            </div>

            <div className="column">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className="form-input" type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" className="form-input" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" className="form-input" value="Send" />
                </form>
            </div>

        </div>

    );
};

export default Email;