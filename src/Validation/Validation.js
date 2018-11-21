import React from 'react';

const validationComponent = (props) => {
    let validationMessage = "OK";

    if(props.length<=5) {
        validationMessage="Text too short";
    }
    if(props.length>20) {
        validationMessage="Text too long";
    }
    return (
        <p>{validationMessage}</p>
    )
}

export default validationComponent;