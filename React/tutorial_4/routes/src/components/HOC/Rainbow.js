import React from 'react';

const Rainbow = (WrappedComponent) =>{

    const colors = ["red", "pink", "orange", "blue", "green", "yellow"]
    const randColor = colors[Math.floor(Math.random()*6)]
    const className = randColor + "-text";

    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>

            </div>
        )
    }
}

export default Rainbow