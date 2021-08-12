/*eslint-disable*/
import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube, faYoutubeSquare, faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {NavLink} from 'react-router-dom'


function HomePage() {
    return ( 
    < div className="HomePage" >
        <header className="main-hero">
            <h1 className="hero-text">
                Hi, I am
                <span> Maamaa Victor</span>
            </h1>
            <p className="h-sub-text">
            <h4>A Software Engineer</h4>
                I build responsive and interactive Websites 
            </p>
            
            <div className="icons">
                <a className="icon-holder" href="https://www.facebook.com/vik.maamaa">
                <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                </a>
                <a className="icon-holder" href="https://github.com/VikMaamaa">
                <FontAwesomeIcon icon={faGithub} className="icon gh" />
                </a>
                <a className="icon-holder" href="https://twitter.com/MaamaaVictor?s=08">
                <FontAwesomeIcon icon={faTwitter} className="icon yt" />
                </a>
                <a className="icon-holder" href="https://www.linkedin.com/in/maamaa-victor-aa1936209">
                <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
                </a>
            </div>
        </header>
    </div>)
    }

    export default HomePage;