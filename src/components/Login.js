import React from 'react';
export class LOGIN extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
        return(
<div id="login-conainer">
     <div id="login-form" ng-controller="loginctrl">
            <form >
                    <div class="form-group">
                      <label id="ll1"  >EMAIL-ID</label>
                      <input type="text" class="form-control" id="loginid" ng-model="loginid" placeholder="ENTER EMAIL ID..."/>
                    </div>
                    <div class="form-group">
                      <label id="ll2" >PASSWORD</label>
                      <input type= "password" class="form-control" id="loginpassword" ng-model="loginpassword" placeholder="ENTER PASSWORD..."/>
                    </div>
                     
                    <button type="submit" ng-click="LOGIN()" class="btn btn-default">LOGIN</button>
                    &nbsp; &nbsp; &nbsp;
                    <button class="btn btn-primary" type="reset" ng-click="RESET()">RESET</button>
                    <br/>
                    <h4>New to LOGIN? </h4> <button ng-click="REGISTER_LOGIN()" class="btn btn-success">REGISTER</button>
                    
                  </form>
     </div>
</div>

        );
    }
}