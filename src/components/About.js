import React from 'react';
export const ABOUT=(props)=>{
    var name = props.match.params.name;
    var desc = props.match.params.descr;
    return(
        <div>
            <h1>Inside About Us Component {name} and {desc}</h1>
        </div>
    )
} 