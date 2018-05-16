import React from 'react';
import {IMAGE} from '../images/image';
export const HOME =(props)=>{
    return(
      <div id="home">
           {/* <h1>JATIN ANAND</h1>
              <h2>FRONT END WEB DEVELOPER</h2> 
              <br/>
              <br/> */}
              <br/>
              <h3 id="tagofhome">WELCOME TO ONLINE SHOP CRUD WEB APP IN REACTJS</h3> 
              {/* <img src="../images/reactjs.png" alt=""/> */}
             {/* <image src="../images/reactjs.png" /> */}
               <img id="ImageHOME" src={IMAGE.url3} alt=""/>
      </div>
    );
}  