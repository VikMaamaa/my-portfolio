/*eslint-disable*/
import React from 'react';
import about from '../img/my.svg';

function ImageSection() {
    return (
        <div className="ImageSection">
            
            <div class="pop-container">
                <div class="pop-box">
                    <div class="pop-circle">
                        <img src={about} alt="" />
                    </div>
                    <img src={about} alt="" />
                </div>
            </div>
            <div className="about-info">
                <h4>I am a<span> Software Engineer</span></h4>
                <p className="about-text">
                    with 5 years of experience in programming, currently specializing in Web Development. I listen to Tech podcasts, follow up TED shows, attend Tech Workshops and Seminars.
                </p>
                <p>At my free time i give Tech tips, play mind and strategy games, read Mangas and watch Animes. </p>
                <div className="about-details">
                    <div className="left-section">
                        
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Countries</p>
                        <p>Address</p>
                       
                    </div>
                    <div className="right-section">
                        
                        <p>: 21</p>
                        <p>: Nigeria</p>
                        <p>: English,Khana</p>
                        <p>: Nigeria</p> 
                        <p>: 5 Bank Road Bori Rivers State</p>
                    </div>
                </div>
                <button className="btn"> <a className="down" href="/maamaa-victor-cv.pdf" download>Download CV  <i class="fas fa-download"></i> </a> </button>
            </div>
        </div>
    )
}

export default ImageSection
