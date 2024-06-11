import React, { Component } from 'react';
import "./About.css";
import Kevinn from "../assets/kevinn.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div>
      <div className="split left">
      <div className="centered">
      <img 
      className="profile_image"
      src = {Kevinn}
      alt="Profile Pic"
      ></img>
      </div>
      </div>
      <div className="split right">
      <div className="centered">
      <div className="name_title">Kevin Gutierrez Garcia</div>
      <div className="brief_description">
      // Details about you goes here
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}