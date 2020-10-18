import React from "react";
import {Link} from "react-router-dom";
import logo from './public/img/logo.png';
import './public/css/style.css';

const Nav = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" width="200px"/>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Movie">Movie List Editor</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav