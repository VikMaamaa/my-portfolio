/*eslint-disable*/
import React from 'react'
import {faGitSquare,faLinux} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuItem({menuItem}) {
    return (
        <div className="card-container">
            {
                menuItem.map((item)=>{
                    let image= {
                        backgroundImage: `url(${item.image})`
                       
                    }
                    return <div className="cardP"style={image} id={item.id} onMouseLeave={()=> document.getElementById(item.id).style.backgroundImage=`url(${item.image})`} onMouseOver={()=> document.getElementById(item.id).style.backgroundImage='none'} key={item.id} >
                        
                                <div class="content">
                                    
                                    <h3>{item.title}</h3>
                                    <h5>built with 
                                        {item.built.map((i)=>{
                                        return ` ${i}, `
                                    })}
                                    </h5>
                                    <a href={item.link1}><FontAwesomeIcon icon={faGitSquare} className="icon fb" /> Repository</a>
                                    <a href={item.link2}><FontAwesomeIcon icon={faLinux} className="icon fb" /> Live</a>
                                </div>
                                <div class="reflection"></div>
                            
                    </div>
                   
                })
            }
        </div>
    )
}

export default MenuItem
