import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

//Internal imports
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'


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

      <Navbar className="border-bottom" bg= "transparent" expand="lg">
      <Navbar.Brand>
      <h3>  <FaLinkedin /> <FaGithub /> Meredith Jones  </h3>
      </Navbar.Brand>
      <Navbar.Toggle ClassName="border-0" aria-controls="navnar-toggle" />
      <Navbar.Collapse id="navbar.toggle">
      <Nav className="ml-auto">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/">About Me</Link>
      <Link className="nav-link" to="/">Contact</Link>

 
      </Nav>
      </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact render= {() => <HomePage title= {this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
      <Route path="/" exact render= {() => <AboutPage title= {this.state.about.title}/>} />
      <Route path="/" exact render= {() => <ContactPage title= {this.state.contact.title} />} />
      <Footer />

      </Container>
      </Router>
    )
  }
}

export default App;
