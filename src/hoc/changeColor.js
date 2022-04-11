import React from "react";

const changeColor = (WrappedComponent) => {

   const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const className = randomColour + '-text';


    return(
        <div className={className}>
            <WrappedComponent/>
        </div>
    )

}

export default changeColor;