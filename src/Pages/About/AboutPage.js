import { React } from 'react';
import Hero from "../../Components/Hero";
import Content from "../../Components/Content";
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
                the University of Pennsylvania's college of Liberal and Professional Studies.
            </p>
            <p>Skills include:</p>
            <li>Javascript</li> 
            <li>jQuery</li> 
            <li>Bootstap</li>
            <li> Mongoose</li> 
            <li>MongoDB</li> 
            <li>Node.JS</li> 
            <li>Handlebars</li> 
            <li>Express</li> 
            <li>React</li>
            </div>
        </Content>
       </div>
       
    );

}

export default AboutPage;