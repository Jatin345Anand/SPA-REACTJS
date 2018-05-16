import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
export const CRUD=(props)=>{
    return(
        <div id="crud-container">
            <br/>
            <br/>
            <h1>ONLINE SHOP</h1>
            <br/>
            <br/>
            <br/><br/>
            <ul>
            <li><NavLink activeClassName="active" to="/crud/admin">ONLINE SHOP ADMIN</NavLink></li>
            <br/>
            <br/>
            <li><NavLink activeClassName="active" to="/crud/user">ONLINE SHOP USER</NavLink></li>
            </ul>
        </div>
    )
}