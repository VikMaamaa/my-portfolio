/*eslint-disable*/
import React from 'react'
import { faGitSquare,faLinux} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuItem({menuItem}) {
    return (
        <div className="holder">
            <div className="mini-cards">
            {
                menuItem.map((item)=>{
                    // let image= {
                    //     backgroundImage: `url(${item.image})`
                       
                    // }
                    return <div className="mini-card mini-card1" key={item.id}>
                        
                            {/* <div class="mini-card mini-card1"> */}
                                <div class="mini-container">
                                    <img src={item.image} alt="" />
                                </div>
                                <div class="details">
                                    <h3>{item.title}</h3>
                                    
                                    
                                <a href={item.link1}><FontAwesomeIcon icon={faGitSquare} className="repository" /> Repository</a>
                                    <a href={item.link2}><FontAwesomeIcon icon={faLinux} className="live" /> Live</a>
                                </div>
                            {/* </div> */}
                       
                   </div>
                })
            }
            </div>
        </div>
    )
}

export default MenuItem
