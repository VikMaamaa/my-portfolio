/*eslint-disable*/
import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route,NavLink} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import MiniProject from './Pages/MiniProject';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';
import python from './img/float/005-python.svg';
import react from './img/float/006-react.svg';
import git from './img/float/git-icon.svg';
import css from './img/float/css-3.svg';
import php from './img/float/027-php.svg';
import javaScript from './img/float/029-javascript.svg';
import html from './img/float/030-html-5.svg';
// import mySql from './img/float/mysql-6.svg';
import mySql from './img/float/021-mysql.svg';
import node from './img/float/nodejs.svg';
import mongo from './img/float/mongodb-icon-1.svg';
import heroku from './img/float/heroku-4.svg';
import cp from './img/float/c (2).svg';
import java from './img/float/003-java.svg';
import github from './img/float/010-github.svg';


function App() {
  // const [navToggle, setNavToggle] = useState(false);

  // const navClick = () =>{
  //   setNavToggle(!navToggle)
  // }

  return (
    <div className="App">
      <div className="container">
        <div class="circle-container">
              <div class="circle">
                  <button id="close">
                      <i class="fas fa-times"> </i>
                    
                  </button>
                  <button id="open">
                      <i class="fas fa-bars"></i>
                      
                  </button>
              </div>
          </div>
      {/* <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div> */}
      {/* <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div> */}
      <div className="main-content">
          <div className="content1">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/projects" exact>
                <PortfoliosPage />
              </Route>
              <Route path="/mini-projects" exact>
                <MiniProject />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
          </div>
      </div>
     
      <div class="box">
            <div><img src={java} alt=""/></div>
        <div><img src={python} alt=""/></div>
        <div><img src={html} alt=""/></div>
        <div><img src={css} alt=""/></div>
        <div><img src={javaScript} alt=""/></div>
        <div><img src={php} alt=""/></div>
        <div><img src={node} alt=""/></div>
        <div><img src={react} alt=""/></div>
        <div><img src={mySql} alt=""/></div>
        <div><img src={github} alt=""/></div>
        </div>
    {/* </div> */}
    </div>
    <nav >
        <ul>
            <li> <NavLink to="/" className="navl" exact activeClassName="active">
            <i class="fas fa-home"></i>         Home
                        </NavLink>
            </li>
            <li> <NavLink to="/about" className="navl" exact activeClassName="active">
            <i class="fas fa-user-alt"></i>          About
                        </NavLink>
            </li>
            <li>
            <NavLink to="/projects"className="navl" exact activeClassName="active">
            <i class="fas fa-briefcase"></i>         Projects
                        </NavLink>
            </li>
            <li>
            <NavLink to="/mini-projects" className="navl" exact activeClassName="active">
                
            <i class="fas fa-box"></i>           Mini-Projects
                        </NavLink>
            </li>
            <li>
            <NavLink to="/blogs" className="navl" exact activeClassName="active">
            <i class="fas fa-blog"></i>      Blogs
                        </NavLink>
            </li>
            <li>
            <NavLink to="/contact" className="navl" exact activeClassName="active">
            <i class="fas fa-phone"></i>
                            Contact
                        </NavLink>
            </li>
            <li id="close1">
                <i class="fas fa-times"></i>Close
            </li>
        </ul>
    </nav>
    
    </div>
  );
}

export default App;
