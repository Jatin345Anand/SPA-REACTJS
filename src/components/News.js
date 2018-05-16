import React from 'react';
export const NEWS=(props)=>{
    const query = new URLSearchParams(props.location.search);
    let value ="";
    for (let param of query.entries()) {
       value +=param;
    }
    return(
        <div>
            <h1>Inside News Component {value}</h1>
        </div>
    )
}