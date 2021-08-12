/*eslint-disable*/
import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from'../Components/SkillsSection';
import python from '../img/float/python-5.svg';
import react from '../img/float/react-2.svg';
import git from '../img/float/git-icon.svg';
import css from '../img/float/css-3.svg';
import php from '../img/float/027-php.svg';
import javaScript from '../img/float/029-javascript.svg';
import html from '../img/float/030-html-5.svg';
import mySql from '../img/float/mysql-6.svg';
import node from '../img/float/nodejs.svg';
import mongo from '../img/float/mongodb-icon-1.svg';
import heroku from '../img/float/heroku-4.svg';
import cp from '../img/float/c (2).svg';

function AboutPage() {
    return (
        <div className="AboutPage">
           
            <Title className="a-title" title={'About Me'} span={'About Me'} />
            <ImageSection />
    
            <Title className="e-title" title={'Experience'} span={'Experience'} />
            <div class="timeline-container">
        <div class="timeline">
            <ul>
                <li>
                    <div class="timeline-content">
                        <h2 class="date">20th jan 2015 - 1st jan 2018</h2>
                        <h1>IT Engineer</h1>
                        <p>At Evergreen Communications Bori, Rivers State.</p>
                    </div>
                </li>
                <li>
                    <div class="timeline-content">
                        <h2 class="date">20th July 2020 -23th Dec 2020</h2>
                        <h1>Web Development Tutor</h1>
                        <p>worked full time as a website development tutor, teaching html5, css, javascript and Php</p>
                    </div>
                </li>
                <li>
                    <div class="timeline-content">
                        <h2 class="date">15th Sep 2020 - 15th Apr 2021</h2>
                        <h1>Full Stack Web Developer</h1>
                        <p>At Benton Consult, Port Harcourt, Rivers State, Nigeria.</p>
                    </div>
                </li>
                <li >
                    <div class="timeline-content">
                        <h2 class="date">21th June 2021 - 21th July 2021</h2>
                        <h1>Side Hustle Intern</h1>
                        <p></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} image={javaScript} progress={'60%'} width={'60%'}/>
                <SkillsSection skill={'React Js'}  image={react} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Php'} image={php} progress={'76%'} width={'76%'}/>
                <SkillsSection skill={'Node Js'} image={node} progress={'30%'} width={'30%'}/>
               
                <SkillsSection skill={'Css'} image={css} />
                <SkillsSection skill={'Html'} image={html} />
                <SkillsSection skill={'Mongo DB'} image={mongo} />
                <SkillsSection skill={'MySQL'}  image={mySql}/>
                <SkillsSection skill={'Git'} image={git} />
                <SkillsSection skill={'Heroku'} image={heroku} />
                <SkillsSection skill={'Python'}image={python} />
                <SkillsSection skill={'C++'} image={cp} />
                
            </div>
            {/* <div className="services-container">
                <ServicesSection image={design} title={'Intern'} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae libero esse fugit facilis?'}/>
                <ServicesSection image={intelligience} title={'IT support'} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae libero esse fugit facilis?'}/>
                <ServicesSection image={gamedev} title={'Web Tutor'} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae libero esse fugit facilis?'}/>
            </div>
            <div className="services-container">
                <ServicesSection image={gamedev} title={'Web Developer'} dates={'07-03-2020'} datef={'09-03-2021'} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae libero esse fugit facilis?'}/>
            </div> */}
           
            {/* <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web design'} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae libero esse fugit facilis?'}/>
                <ServicesSection image={intelligience} title={'Artificial Intelligience'} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae libero esse fugit facilis?'}/>
                <ServicesSection image={gamedev} title={'Game Devlopment'} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae libero esse fugit facilis?'}/>
            </div>
            */}
        </div>
    )
}

export default AboutPage
