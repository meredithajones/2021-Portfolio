import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';


class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }
    

    render() {
        return(
        <div>
            <Hero title={this.props.title} />

            <Content>

            </Content>
        </div>
        );
    }
}

export default ContactPage;