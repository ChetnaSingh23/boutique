import React from 'react';

class Nav extends React.Component {
    navigate() {
        this.props.history.pushState(null, "/");
    }
    onRegister(){
      alert("hey regs÷ter")
    }
    render() {
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
                   <button class="btn btn-danger" type="button"  data-toggle="modal" data-target="#myModal">Register/login</button>
                </li>
                </ul>
                <div class="modal fade" id="myModal">
                  <div class="modal-dialog">
                    <div class="modal-content">
                    
                      {/*!-- Modal Header -->*/}
                      <div class="modal-header">
                        <h4 class="modal-title">Modal Heading</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      
                      <div class="modal-body">
                        Modal body..
                      </div>
                      
                      <div class="modal-footer">
                        <button type="button" class="btn btn-success" onClick={this.onRegister}>Register</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
          </nav>)
    }
}

export default Nav;