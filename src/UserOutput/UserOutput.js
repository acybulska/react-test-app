import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>I have an army</p>
            <p>We have {props.userName}</p>
        </div>
    )
}

export default userOutput;