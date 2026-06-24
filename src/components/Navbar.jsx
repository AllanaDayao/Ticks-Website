import React from 'react';
import './navbar.css'


const NavBar = () => {
    return(

        <nav  className = "navbar">
        <ul className = "navLinks">

            <li>
                <a href ="./pages/About.jsx">About</a>
            </li>
            <li>
                <a href ="./pages/Home.jsx">Home</a>
            </li>
            <li>
                <a href ="./pages/Research.jsx">Research</a>
            </li>

        </ul>


        </nav>
    );
};

export default NavBar