import React from 'react';
import LoginPage from '../pages/LoginPage';

class Nav extends React.Component {
    navigate() {
        this.props.history.pushState(null, "/");
    }
    onRegister(){
      alert("hey regs÷ter")
    }
    render() {
      console.log("inside nav",this.props);
        return (
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <a class="navbar-brand" href="#">Logo</a>

            {/*<div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#/">Brand</a>
              </div>*/}
                <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" ref="#/contact">Contact</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"href="#/women">Women FASHION</a>
                </li>
                <li class="nav-item">
                  <LoginPage/>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/profile">Profile</a>
                </li>
                </ul>
          </nav>)
    }
}

export default Nav;