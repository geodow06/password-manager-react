import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Password Manager
      </Link>
      <div className="navbar-right">
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
    );
}

export default NavBar;