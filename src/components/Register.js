import React from 'react';
export class REGISTER extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
        return(
 
<div id="login-conainer">
        <div id="register-form">
               <form> 
                       <div class="form-group">
                         <label id="ll1"  >EMAIL-ID</label>
                         <input type="text" class="form-control" id="registerid" ng-model="registerid" placeholder="ENTER EMAIL ID..."/>
                       </div>
                       <div class="form-group">
                         <label id="ll2" >USERNAME</label>
                         <input type= "text" class="form-control" id="registerusername" ng-model="registerusername" placeholder="ENTER USERNAME..."/>
                       </div>
                       <div class="form-group">
                            <label id="ll1"  >PASSWORD</label>
                            <input type="password" class="form-control" id="registerpassword" ng-model="registerpassword" placeholder="ENTER PASSWORD..."/>
                          </div>
                          <div class="form-group">
                            <label id="ll2" >AGE</label>
                            <input type= "text" class="form-control" id="registerage" ng-model="registerage" placeholder="ENTER AGE..."/>
                          </div> 
                          <div class="form-group">
                                <label id="ll2" >ADDRESS-CITY</label>
                                <input type= "text" class="form-control" id="registercity" ng-model="registercity" placeholder="ENTER ADDRESS CITY..."/>
                              </div> 
                       <button class="btn btn-primary" type="reset" ng-click="RESET()">RESET</button>
                       &nbsp; &nbsp; &nbsp;   
                         <button ng-click="REGISTER()" class="btn btn-success">REGISTER</button>
                       
                     </form>
        </div>
   </div>
   
        );
    }
}