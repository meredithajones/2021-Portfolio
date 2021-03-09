import { React } from 'react';
import Hero from "../Components/Hero";
import Content from "../Components/Content";

function AboutPage(props) {

    return(
      
       <div>
        <Hero title={props.title} />

        <Content className="bio">
            Hello I'm Meredith, a web developer based in Philadelphia. 
        </Content>
       </div>
       
    );

}

export default AboutPage;