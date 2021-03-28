import React from "react";
import { Link } from "react-router-dom";
import MyResume from '../Resume/meredith_jones_resume.pdf'
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";


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
        </Container>

export default Navbar;