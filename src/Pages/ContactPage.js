import React from 'react';
import ReCaptcha from '../Components/ReCaptcha.js';
import Hero from '../Components/Hero';
import { ToastContainer, toast , Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Pages/ContactPage.css';

// import Content from '../Components/Content';
// import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

// import Axios from 'axios';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_rMuPcHScdQ7joaXqMmqZr");




function ContactMe() {

    const toastifySuccess = () => {
        toast('Thanks for your email! I will get right back to you', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };

      const toastifyError = () => {
        toast('Oh no! Something went wrong. Please reach out directly at meredithjonesp@gmail.com', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };


        function sendEmail(e) {
            e.preventDefault();
    
        emailjs.sendForm('service_zimcbdw', 'template_e90bbd3', e.target, 'user_rMuPcHScdQ7joaXqMmqZr')
        .then((result) => {
            console.log(result.text);
            toastifySuccess();
            
              

        },  (error) => {
            console.log(error.text);
            toastifyError();
        });
        e.target.reset()
    };

   
    return(

       <div> <Hero title = 'Get In Touch' /> 
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
            <ToastContainer />
        </div>
    </div>
       
     )
    }


    export default ContactMe;


      