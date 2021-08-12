/*eslint-disable*/
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return ( <
        div >

        {
            /* <nav className="nav">
                        <div className="profile">
                            <img src={avatar} alt=""/>
                        </div>
                        <u1 className="nav-items">
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" exact activeClassName="active">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/portfolios" exact activeClassName="active">Portfolios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blogs" exact activeClassName="active">Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>
                            </li>
                        </u1> */
        } <
        nav >
        <
        ul >
        <
        li > < i class = "fas fa-home" > < /i>Home <
        /li> <
        li > < i class = "fas fa-user-alt" > < /i>About <
        /li> <
        li > < i class = "fas fa-envelope" > < /i>Contact <
        /li> <
        li id = "close1" >
        <
        i class = "fas fa-times" > < /i>Close <
        /li> <
        /ul>

        <
        /nav> <
        footer >
        <
        p >
        &
        copy; 2021 Maamaa Victor <
        /p> <
        /footer> { /* </nav> */ }

        <
        /div>
    )
}

export default NavBar;