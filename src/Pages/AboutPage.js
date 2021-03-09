import { React } from 'react';
import Hero from "../Components/Hero";

function AboutPage(props) {

    return(
      
       <div>
        <Hero title={props.title} />
       </div>
       
    );

}

export default AboutPage;