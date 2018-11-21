import React from 'react';

const validationComponent = (props) => {
    return (
        <div>
        {
            props.length < 5 ? <p>Text too short</p> : null
        }
        {
            props.length > 20 ? <p>Text too long</p> : null
        }
        </div> 
    )
}

export default validationComponent;