/*eslint-disable*/
import React from 'react'
import java from '../img/float/003-java.svg';
import python from '../img/float/005-python.svg';
import react from '../img/float/006-react.svg';
import github from '../img/float/010-github.svg';
import php from '../img/float/027-php.svg';
import javaScript from '../img/float/029-javascript.svg';
import html from '../img/float/030-html-5.svg';
import css from '../img/float/031-css.svg';
import mySql from '../img/float/021-mysql.svg';
import node from '../img/float/nodejs.svg';

function SkillsSection({skill,image}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                
                <div className="skill-i">
                    <img src={image} alt="" style={{width:'45%'}}/>
                    {/* <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-progress" style={{ width: width}}></div>
                        </div>
                    </div> */}
                    <h5 className="skill-title">{skill}</h5>
                </div>
                {/* <div className="skill-t"><h5 className="skill-title">{skill}</h5></div> */}
                

            </div>
            <div class="box">
        {/* <div><img src={java} alt=""/></div>
        <div><img src={python} alt=""/></div>
        <div><img src={html} alt=""/></div>
        <div><img src={css} alt=""/></div>
        <div><img src={javaScript} alt=""/></div>
        <div><img src={php} alt=""/></div>
        <div><img src={node} alt=""/></div>
        <div><img src={react} alt=""/></div>
        <div><img src={mySql} alt=""/></div>
        <div><img src={github} alt=""/></div> */}
    </div>
        </div>
    )
}

export default SkillsSection
