import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

class Captcha extends Component{
    constructor(props) {
        super(props)
    }
}
handleSubscribe() {
    if (this.state.isVerified) {
        alert ('Thanks for your email! I will be in touch soon.')
    }
}

export default handleSubscribe