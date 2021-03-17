import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

// import Hero from '../Components/Hero';
// import Content from '../Components/Content';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// import Axios from 'axios';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_rMuPcHScdQ7joaXqMmqZr");

export default function ContactUs() {

        function sendEmail(e) {
            e.preventDefault();
    
        emailjs.sendForm('service_zimcbdw', 'template_e90bbd3', e.target, 'user_rMuPcHScdQ7joaXqMmqZr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }


    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}