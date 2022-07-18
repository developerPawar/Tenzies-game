import React from "react";

export default function Die(props) {
    // Conditional rendering is applied using prop isHeld to check for the die condition and apply it to 'style'
    const bgColor = { 
        backgroundColor: props.isHeld ? "#59E391" : "white" 
    }

    return (
        <div className="die-styling" style={bgColor} onClick={props.holdDice}>
             <h2 className="die-num">{props.value}</h2>
        </div>
    )

}