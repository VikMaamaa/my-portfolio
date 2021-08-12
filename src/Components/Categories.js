/*eslint-disable*/
import React from 'react'
import {NavLink} from 'react-router-dom';
function Categories({filter, categories}) {
    return (

        <div className="cate">
            <div class="active" id="nav">
            <ul>
            {
                categories.map((cat,i) => {
                    return <li><a href="#" onClick={() => filter(cat)} key={i}>{cat}</a></li>
                })
            }
        </ul>
    </div>
        </div>
        
    )
}

export default Categories
