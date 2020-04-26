import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {log} from "../actions/memberactions"
import food from "../../images/food.jpg"
import "./header.css"

class Header extends Component {  
   logoutuser=()=>{
       this.props.dispatch(log()).then(res=>{
           console.log('logout')
           
        }).catch(err=>
        console.log(err)
        )
   }
   
    render() {
      console.log(this.props.user.userData)
        return (
               
<nav className="navbar sticky-top navbar-expand-md navbar-light" >
  <a className="navbar-brand" href="#">
    NGO Donate
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>    
    </ul>
    <ul className="navbar-nav ">
        <li className="nav-item"><a className="nav-link" href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li className="nav-item"><a className="nav-link" href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
  </div>  
</nav>

         
        );
    }
}

const mapStateToProps=(state)=>{
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Header);