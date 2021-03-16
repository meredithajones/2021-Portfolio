import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Axios from 'axios';
import emailjs from 'emailjs-com';

export default function ContactUs() {

        function sendEmail(e) {
            e.preventDefault();
    
        emailjs.sendForm('gmail', 'youtube_template', e.target, 'user_rMuPcHScdQ7joaXqMmqZr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

    
