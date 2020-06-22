import React, {Component} from 'react';
import './App.css';
import Login from './Functional/Login'
import NavBar from './Functional/NavBar';
import { Route, useHistory } from 'react-router';
import SignUp from './Functional/SignUp';
import Home from './Functional/Home';
import {userContext} from './Config/userContext';
import authenticationService from './Services/authenticationService';
import Passwords from './Class/Passwords'
import Callback from './Helpers/Callback'
import SecuredRoute from './Class/SecuredRoute';
// import PrivateRoute from './Class/PrivateRoute';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      token: {}
    }
    
  }

  

  requireAuth(){
    if(!authenticationService.authenticated()){
      // history.push('/')
    }
  }

  render(){
  return (
    <userContext.Provider value={this.state.token}>
      <div className="App">
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/sign-up' component={SignUp}></Route>
        <Route exact path='/callback' component={Callback}/>
        {/* <PrivateRoute></PrivateRoute> */}
        <SecuredRoute exact path='/private' component={Passwords}></SecuredRoute>
      </div>
    </userContext.Provider>
  );}
}

export default App;
