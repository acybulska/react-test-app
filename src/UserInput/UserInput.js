import React from 'react';

const userInput = (props) => {
    return (
        <input type="text" style={props.style} onChange={props.changed} placeholder="Enter a hero"/>
    )
}

export default userInput;