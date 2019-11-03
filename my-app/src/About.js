import React from 'react';
import './App.css';
import aboutPhoto from "./images/first.jpg";

function About() {
    return (
        <div>
            <div className='offers'>
                <span className='textforinvi'> O nas</span>
            </div>
            <div className='rowOrColumn'>
                <div className='offer wider'>
                    <div className='textDiv'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className=''>
                        <img src={aboutPhoto} className="mainPhoto" alt="seeko front"/>
                    </div>
                </div>


            </div>
        </div>

    );
}

export default About;