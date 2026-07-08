import React from 'react';
import './identification.css';



function TickID () {

    return(

        <div className = "id-container">

            {/*  Ixodes */ }
            <div className = "tick-type-container">

                {/*Male */}
                <div className = "flip-box">
                    <div className = "flip-box-inner">
                        <div className = "flip-box-front">
                            <h2>M</h2>
                        </div>
                        <div className = "flip-box-back">
                            <h2>m</h2>
                        </div>
                    </div>
                </div>

                {/*Female */}
                <div className = "flip-box">
                    <div className = "flip-box-inner">
                        <div className = "flip-box-front">
                            <h2>F</h2>
                        </div>
                        <div className = "flip-box-back">
                            <h2>f</h2>
                        </div>
                    </div>
                </div>

                {/*Nymph */}
                <div className = "flip-box">
                    <div className = "flip-box-inner">
                        <div className = "flip-box-front">
                            <h2>N</h2>
                        </div>
                        <div className = "flip-box-back">
                            <h2>n</h2>
                        </div>
                    </div>
                </div>



            </div>

        </div>

    )

}

export default TickID