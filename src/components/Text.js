import React from 'react';

const Text = (props) => {
    return (
    <div>
        <h5 style={{color: props.color}}>{props.subtitle}</h5>
    </div> 
    )
}

export default Text;