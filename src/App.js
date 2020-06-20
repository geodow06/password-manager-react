import React, {Component} from 'react';
import './App.css';
import Login from './Functional/Login'
import NavBar from './Functional/NavBar';
import { Route } from 'react-router';
import SignUp from './Functional/SignUp';
import Home from './Functional/Home';
class App extends Component {
  render(){
  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/sign-up' component={SignUp}></Route>
    </div>
  );}
}

export default App;
