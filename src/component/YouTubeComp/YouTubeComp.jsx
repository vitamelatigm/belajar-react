import React from "react";
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    
    return ( <div className="youtube-wrapper">
        <div className="img-thumb">
            <img src={props.image} alt=""></img>
            <p className="time">{props.time}</p>
        </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
        
    </div>  
    )
}

export default YouTubeComp;