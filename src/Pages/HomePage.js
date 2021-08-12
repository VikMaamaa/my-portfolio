/*eslint-disable*/
import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube, faYoutubeSquare, faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'


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
                <Link className="icon-holder">
                <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                </Link>
                <Link className="icon-holder">
                <FontAwesomeIcon icon={faGithub} className="icon gh" />
                </Link>
                <Link className="icon-holder">
                <FontAwesomeIcon icon={faTwitter} className="icon yt" />
                </Link>
                <Link className="icon-holder">
                <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
                </Link>
            </div>
        </header>
    </div>)
    }

    export default HomePage;