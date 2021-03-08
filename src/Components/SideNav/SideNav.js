import React from 'react';
import Link from "react-router-dom";

import { FaGithub, FaLinkedin } from "react-icons/fa";



const SideNav = () => {
    return (
        <nav className="sidenav">
            <a href="https://www.linkedin.com/in/meredithjones4747/" target="_blank" rel="noreferrer">
                <i className=""><FaLinkedin /></i>
            </a>
            <a href="https://github.com/meredithajones" target="_blank" rel="noreferrer">
                <i className=""><FaGithub /></i>
            </a>
            <Link to="">
                <i className=""></i>
            </Link>
        </nav>
    );
}
 
export default SideNav;