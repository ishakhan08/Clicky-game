
//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        
          <h4 className="itemLeft">Test Your Memory</h4>
          <h2 className="itemCenter">Cheesecake Clicky Game</h2>
          <li className="itemRight">Score: {this.props.score}</li>
       
      </nav>
    );
  }
}

export default Navbar;