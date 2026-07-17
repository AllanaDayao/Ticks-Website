import React, { useState, useEffect } from 'react';
import '../styles/home.css';

import img1 from '../assets/PXL_20230525_144157511.jpg';
import img2 from '../assets/lawn-tick-control.jpg';
import img3 from '../assets/ticks-close.jpg';

const images = [img1, img2, img3 ];

{/*Array of images and their captions*/}
const slides = [
    {
        image: img1,
        caption: "Ticks under a microscope"
    },
    {
        image: img2,
        caption: "wassup"
    },
    {
        image: img3,
        caption: "hii"
    }
];

function Slideshow() {

    const [currentIndex, setCurrentIndex] = useState(0);


    {/* setting up componenets*/}

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (

        <div className = "slideshow-container">
            {/*The image*/}
            <img
            src = {images[currentIndex]}
            alt = {`Slide ${currentIndex + 1}`}
            />

            {/*the caption*/}
            <div className = "caption">
                <p>{slides[currentIndex].caption}</p>
            </div>
        </div>
    );

}

function Home() {

    return (
        <div className = "homepage">
            <Slideshow />

            {/* INTROUDCTION */}

            <div className = "intro-strip-container">
                <p> Our laboratory studies the epidemiology and ecology of vector-borne infections. Our main focus 
                    is to try to understand how tick-borne pathogens are perpetuated in nature. We are reexamining current
                    dogma about deer tick-transmitted infections such as Lyme disease with modern molecular tools
                    and finding that much of our understanding of the transmission cycles in nature is incomplete.</p>
            </div> 

            <div className = "intro-container">
            {[
                {
                    title: "Why Ticks Matter",
                    body: "words words"
                    
                },
                {
                    title: "Our Research",
                    body: "words words"
                    
                },
                {
                    title: "Get Involved",
                    body: "words words"
                    
                },
            ].map((card)=> (
                <div key={card.title} className="info-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                </div>
            ))
            }

            </div>


            {/* Recent Lab publications*/}



        </div>
            
    );
    
}
export default Home


