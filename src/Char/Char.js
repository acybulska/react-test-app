import React from 'react';
import './Char.css';

const charComponent = (props) => {
    return (
        <div className="CharComponent">{ props.preview }</div>
    )
}

export default charComponent;