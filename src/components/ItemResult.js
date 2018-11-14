import React from 'react';

const ItemResult = ({ name, age }) => {
    return (
        <div key={name + age} onClick={()=> alert() }>
            <h4>Imie: {name}</h4>
            <p>Wiek: {age}</p>
        </div >
    )
}

export default ItemResult;