import React from 'react';
import './about.css';

import img1 from '../assets/heidi.jpeg';
import img2 from '../assets/sam.jpeg';
import img3 from '../assets/cara.jpg';


function About() {

    return(
        <div className = "about-page">

            <div className = "mission-container">
                <h3> Our Mission</h3>
                <p> words words words words</p>

            </div>


            <div className = "team-container">

             {/*Lists members + brief intros*/}

            <div className = "card">
                <a href = "https://vet.tufts.edu/people/faculty/heidi-goethert" target = "_blank" rel = "noopener noreferrer">
                    <img src = {img1} alt = "Avatar"/>
                </a>

                <div className = "container">
                    <h4>Heidi Goethert</h4>
                    <p> description</p>
                </div>
            </div>

            <div className = "card">
                <a href = "https://vet.tufts.edu/people/faculty/sam-telford-iii" target = "_blank" rel = "noopener noreferrer">
                    <img src = {img2} alt = "Avatar"/>
                </a>

                <div className = "container">
                    <h4>Sam Telford</h4>
                    <p> description</p>
                </div>
            </div>

            <div className = "card">
                <a href = "https://vet.tufts.edu/people/student/cara-martone" target = "_blank" rel = "noopener noreferrer">
                    <img src = {img3} alt = "Avatar"/>
                </a>

                <div className = "container">
                    <h4>Cara Martone</h4>
                    <p> description</p>
                </div>
            </div>

            <div className = "card">
                <a href = "https://www.researchgate.net/scientific-contributions/Alanna-OCallahan-2256880814" target = "_blank" rel = "noopener noreferrer">
                    <img src = {img1} alt = "Avatar"/>
                </a>

                <div className = "container">
                    <h4>Alanna O'Callahan</h4>
                    <p> description</p>
                </div>
            </div>

            </div>

        </div>
    )
    
}

export default About;