import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
export const Header = (props)=>{
    return (
        <div id="header"> 
        <ul>
            <li><NavLink exact activeClassName="active" to="/">HOME</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/login">LOGIN</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/register">REGISTER</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/crud">ONLINE SHOP</NavLink></li>
            
            <li><NavLink activeClassName="active" to="/about/Ram/Developer">ABOUT US</NavLink></li>
            <li><NavLink activeClassName="active" to="/contact">CONTACT US</NavLink></li>
            <li><NavLink activeClassName="active" to={{pathname:'/news',search:'?time=9000&name=Sports News'}}>NEWS 
            </NavLink>
            </li> 
        </ul>
        </div>
    )
}