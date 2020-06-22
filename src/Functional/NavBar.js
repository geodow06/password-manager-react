import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import authSvc from '../Services/authenticationService'
function NavBar() {
  
  
  // function handleClick(){
  //   history.push("/")
  // }
  function handleClick(){
    authSvc.logout()
    window.location='/'
  }
  return (
  <nav className="navbar navbar-dark bg-primary fixed-top">
    <Link className="navbar-brand" to="/">
      Password Manager
    </Link>
    <div className="navbar-right">
      {/* <button type="button" onClick={handleClick}>Home</button> */}
      {!authSvc.authenticated()&&<Link to="/sign-up">Sign Up</Link>}
      {!authSvc.authenticated()&&<Link to="/login">Login</Link>}
      {authSvc.authenticated()&&<button type="button" onClick={handleClick}>Log out</button>}
    </div>
  </nav>
  );
}

export default withRouter(NavBar);