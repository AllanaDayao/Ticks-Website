import React from 'react';
import './identification.css';



function TickID () {

    return(

        <div className = "id-container">

            <div className = "title-container">
                <h2>Identify Common Tick Species</h2>
                <p>Browse the species in our database. Hover over any card for detailed
                    information, features, and disease associations. 
                </p>
            </div>

            <hr className = "line"></hr>

            {/*  IXODES */ }

            <h3>Black Legged Tick <span className= "italic">(Ixodes Pacificus)</span></h3>
            <div className = "tick-type-container">

                {/*Male */}
                <div className = "flip-box">
                    <div className = "flip-box-inner">
                        <div className = "flip-box-front">
                            <h2>M</h2>
                        </div>
                        <div className = "flip-box-back">
                            <p>Smaller than females, larger than nymphs, black/very dark brown</p>
                            <p>Rarely take blood meals. Their primary role is to find and mate with a female</p>

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



            {/*  AMBLYOMA */ }

            <h3>Lone Star Tick <span className= "italic">(Amblyomma Americanum)</span></h3>
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


            {/*ASIAN LONGHORNED TICK*/}
            <h3>Asian Longhorned Tick <span className= "italic">(Haemaphysalis Longicornis)</span></h3>
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


            <hr className = "line"></hr>


            {/*What to do when bitten */}

            <div className = "note">
                <p><strong>Caution!</strong>If bitten.....</p>
            </div>


            




            

        </div>

    )

}

export default TickID