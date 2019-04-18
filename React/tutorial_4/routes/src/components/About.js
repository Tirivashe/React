import React from 'react';
import  Rainbow from "./HOC/Rainbow"

const About = () =>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p className="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, eligendi.</p>
        </div>
    )
}

export default Rainbow(About)