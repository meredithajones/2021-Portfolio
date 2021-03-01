import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import Container from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Meredith Jones",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Creating Beautiful Online Spaces",
        subTitle: "Coding for the greater good",
        greeting: "Take a look at a few of my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Get In Touch",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container ClassName="p-0" fluid={true}>
      </Container>
      </Router>
    )
  }
}

export default App;
