import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'
import tufts from '../assets/tufts_logo.jpg'


const NavBar = () => {
    return(
        <nav  className = "navbar">

            <img src = {tufts} alt = "Avatar" className = "img"></img>
            <h1>Ecology of Zoonoses Laboratory</h1>

            <ul className = "navLinks">

                <li> <Link to = "/">Home</Link></li>
                <li> <Link to = "/about">About</Link></li>
                <li> <Link to = "/research">Research</Link></li>
                <li> <Link to = "/identification">Tick Identification</Link></li>

            </ul>
        </nav>
    );
};

export default NavBar;



