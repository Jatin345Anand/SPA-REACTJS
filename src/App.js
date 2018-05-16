import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom';
import {Header} from './containers/header';
import {HOME} from './components/home';
import {LOGIN} from './components/Login';
import {REGISTER} from './components/Register';
import {CRUD} from './components/crud';
import {CRUDUSER} from './containers/cruduser';
import {Crud} from './containers/crud';
import {CONTACT} from './components/Contactus';
import {ABOUT} from './components/About';
import {NEWS} from './components/News';
import {OFFICE} from './components/office';
import {RESIDENCEADDRESS} from './components/residance';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/> 
      <Switch>
        <Route path="/" exact component={HOME} />
        <Route path="/login" exact component={LOGIN} />
        <Route path="/register" exact component={REGISTER} />
        <Route path="/crud" exact component={CRUD} />
       
        <Route path="/about/:name/:descr" exact component={ABOUT}/>
        <Route path="/contact"  exact component={CONTACT}/>
        <Route path="/news" exact render={()=><h1>ABOUT</h1>}/>
        <Redirect exact from="/new" to="/news"/>
        <Redirect exact from="/contactus" to="/contact"/>
        <Switch>
        <Route path="/contact/office" exact component={OFFICE}/>
          <Route path="/contact/residence" exact component={RESIDENCEADDRESS}/>
          <Route path="/crud/admin" exact component={Crud}/>
          <Route path="/crud/user" exact component={CRUDUSER}/>
       
        </Switch>
      </Switch>
      </div>
    );
  }
}
// component={ABOUT}
export default App;
