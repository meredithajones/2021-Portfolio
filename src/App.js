import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";


//Internal imports
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/About/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Sidenav from "./Components/SideNav/SideNav.js";
import MyResume from "./Components/Resume/meredith_jones_resume.pdf";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Meredith Jones",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Resume", path: "/resume" },
      ],
      home: {
        title: "Meredith Jones Creating Beautiful Online Spaces",
        subTitle: "Take a look at a few of my recent projects below",
        greeting: "Take a look at a few of my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Get In Touch",
        subTitle: "Download my resume" ,
      },
    };
  }

  render() {
    return (
      <Router>
        <backGImage />
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" expand="lg">
            <Navbar.Brand>
              <h3>
                {" "}
                Meredith Jones
              </h3>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar.toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About Me
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
                <a className="nav-link" href={MyResume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Sidenav />  
          <Link to="/home/" render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Link to="/about/" render={() => <AboutPage title={this.state.about.title} />} />
          <Link to="/contact/" render={() => <ContactPage title={this.state.contact.title} />} />
          <Link to="/resume/" render={() => <MyResume />} />

          <Footer />
        </Container>
      </Router>
      
    );
  }
}

export default App;
