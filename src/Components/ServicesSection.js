/*eslint-disable*/
import React from 'react'

function ServicesSection({image,title,text,dates,datef}) {
    return (
        <div className="ServicesSection">{
            <div className="service">
                <div className="service-content">
                    <img src={image} alt=""/>
                    <h5 className="s-title">{title}</h5>
                    
                        <h6 className="s-date">{dates} - {datef}</h6> 
                    <p className="s-text">
                        {text} 
                    </p>
                </div>
            </div>}
        </div>
    )
}

export default ServicesSection
