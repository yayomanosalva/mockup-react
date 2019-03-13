import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
        <header className="main-header">
            <style jsx>{`
            logo-lg {
                background-image: url(./logo.png);
            background-repeat: no-repeat;
            background-position: left top;
            padding-top:68px;
            margin-bottom:50px;
                }
            `}
            </style>
            <a href="#s" className="logo-lg">
                <img src="../img/logo.png" alt=""/>
            </a>
            <nav class="navbar navbar-expand-lg  bg-light">
                
                 
            <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
            </nav>
            </header>
    )
  }
}