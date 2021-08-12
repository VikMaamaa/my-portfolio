/*eslint-disable*/
import React from 'react';
import allBlogs from '../Components/allBlogs';
import Title from '../Components/Title'
import java from '../img/float/003-java.svg';
// import python from '../img/float/005-python.svg';
// import react from '../img/float/006-react.svg';
import github from '../img/float/010-github.svg';
import php from '../img/float/027-php.svg';
import javaScript from '../img/float/029-javascript.svg';
import html from '../img/float/030-html-5.svg';
// import css from '../img/float/031-css.svg';
import mySql from '../img/float/021-mysql.svg';
import node from '../img/float/nodejs.svg';
import python from '../img/float/python-5.svg';
import react from '../img/float/react-2.svg';
import git from '../img/float/git-icon.svg';
import css from '../img/float/css-3.svg';

function BlogsPage() {
    return ( 
    <div >
       <div className="b-title">
        <Title title={'Recent Blogs'} span={'Recent Blogs'} />
       </div>
       <div className="BlogsPage">
       {
           allBlogs.map((blog)=>{
               return <div className="blog" key={blog.id}>
                   <div className="blog-content">
                       <img src={blog.image} alt=""/>
                       <a href={blog.link} className="blog-link">
                          {blog.title}
                       </a>
                   </div>
               </div>
           })
       }
       </div>
       <div class="box">
        <div><img src={java} alt=""/></div>
        <div><img src={python} alt=""/></div>
        <div><img src={html} alt=""/></div>
        <div><img src={css} alt=""/></div>
        <div><img src={javaScript} alt=""/></div>
        <div><img src={php} alt=""/></div>
        <div><img src={git} alt=""/></div>
        <div><img src={node} alt=""/></div>
        <div><img src={react} alt=""/></div>
        <div><img src={mySql} alt=""/></div>
        <div><img src={github} alt=""/></div>
    </div>
    </div>
    )
}

export default BlogsPage