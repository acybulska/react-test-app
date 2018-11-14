import React from 'react';
import ItemResult from './ItemResult';

const ListResult = props => {
    return props.data.filter(item => item.name == "Lisa").map(item => {
        return (
            <ItemResult alert={props.alert} name={item.name} age={item.age}></ItemResult>
        )
    })
}

export default ListResult;