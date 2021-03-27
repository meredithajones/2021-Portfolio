import React from "react";
import { Link } from "react-router-dom";
import MyResume from '../Resume/meredith_jones_resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import "./style.css";


const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
       <h3> Meredith Jones</h3>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              MyProjects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          </ul>
          </div>
          <div id="rightSideNav">
            <ul className="navbar-nav">
          <li className="nav-item" id="resumeBtn">
          <a href={MyResume}
            target="_blank" rel="noopener noreferrer" >
               View My Resume
                </a>
          </li>
        
          <li className="nav-item">
             <a className="nav-link active" target="_blank" rel="noopener noreferrer" href="https://github.com/meredithajones"><FontAwesomeIcon icon={faGithub}/></a>
          </li>

          <li className="nav-item">
             <a className="nav-link active" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/meredithJones4747/"><FontAwesomeIcon icon={faLinkedinIn}/></a> 
          </li>

        </ul>
      </div>
      </nav>
  );
}

export default Navbar;