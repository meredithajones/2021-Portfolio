import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google'
class reCaptchaComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
componentDidMount() {
    if (this.captcha) {
        console.log("started, just a second...")
        this.captcha.reset();
        this.captcha.execute();
    }
  }
onLoadRecaptcha() {
      if (this.captcha) {
          this.captcha.reset();
      }
  }
verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }
render() {
    return (
      <div>
        {/* You can replace captchaDemo with any ref word */}
        <ReCaptcha
            ref={(el) => {this.captcha = el;}}
            size="compact"
            render="explicit"
            sitekey="your_site_key"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component. <br/>
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>
    );
  };
};
export default reCaptchaComponent;