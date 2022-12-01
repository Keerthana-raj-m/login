import React from "react";
import './Login.css';
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="main">
      <div className="sub-main">
        <h1>Login Page</h1>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div className="btn">
          <Link to='/web'>
          <button>Login {}</button>

          </Link>
        </div>
        <p className="link">
          <a href="#">Forgot Password?</a> Or <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
