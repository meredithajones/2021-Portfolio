import { React } from 'react';
import Hero from "../../Components/Hero";
import Content from "../../Components/Content";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "../About/About.css";

function AboutPage(props) {

    return(
      
       <div>
        <Hero title={props.title} />

        <Content >
            <div className= "bio">
            <p>Hello I'm Meredith, a web developer based in Philadelphia.</p>
           
            <p>I love expressing my creativity in the applications that I build. </p>
            <p>My background includes an intensive full-stack coding education through 
                the University of Pennsylvania's College of Liberal and Professional Studies.
            </p>

            <p>Skills include:</p>
            <Row className="border-top justify-content-between p-2">
            <Col className='p-0' md={3} sm={12} >
            <li>Javascript</li> 
            <li>jQuery</li> 
            <li>Bootstap</li>
            <li>Mongoose</li> 
            <li>MongoDB</li> 
            <li>MySQL</li>
            </Col>
            <Col className="p-0" d-flex justify-content-end md={3}>
            <li>Node.JS</li> 
            <li>Handlebars</li> 
            <li>Express</li> 
            <li>React</li>
            <li>CSS3</li>
            <li>HTML5</li>
            </Col>
            </Row>
            <br></br><p>I'm a beer nerd, animal lover, and outdoor enthusiast.</p>
            <p>When I am not behind a computer, you can find me at at local brewery, volunteering at an animal sanctuary, or hiking the Wissahickon trails.</p>
            </div>
        </Content>
       </div>
       
    );

}

export default AboutPage;