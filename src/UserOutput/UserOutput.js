import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p className="Loki">I have an army</p>
            <p className="Hero">We have {props.userName}</p>
        </div>
    )
}

export default userOutput;