import React,{Component} from "react";
import {Link} from "react-router-dom";
import logo from './public/img/logo.png';
import './public/css/style.css';
import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDKj0hehck-RXNvL60xJZBqydWM1GD4ssY",
    authDomain: "login-71334.firebaseapp.com",
    databaseURL: "https://login-71334.firebaseio.com",
    projectId: "login-71334",
    storageBucket: "login-71334.appspot.com",
    messagingSenderId: "398898463982",
};

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider(); 


class Nav1 extends Component {
    state = {user : []}
    
    
    onBtnLoginClick = () => {
      firebase.auth().signInWithPopup(provider)
      .then((res) => {
      this.setState({user: res.user})
      console.log(res)
      })
      .catch((err) => {
      console.log(err)
      })
    }
  
    onBtnLogoutClick = () =>{
      firebase.auth().signOut()
      .then((res) => this.setState({user : []}))
      .catch((err) => console.log(err))
      }
    
    render(){
    return (
    <>
        <div>
        {this.state.user.length === 0
        ?
        <div>
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
                    <input type='button' value='login with google' onClick={this.onBtnLoginClick} />
                </li>
            </ul>
        </nav>
        </div>
        :
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
                    <input type='button' value='logout' onClick={this.onBtnLogoutClick} />
                </li>
            </ul>
        </nav>
        }
        
        
        </div>
    </>
    )}
}
export default Nav1