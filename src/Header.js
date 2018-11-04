import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg  navbar-custom ">
                <div className="container">
                   
                    <div className="col-md-3">
                        <a href="index.html" className="logo">
                            <span>
                                <img src="#" alt="Know your candidates" />
                            </span>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                            <li className="nav-item active">
                                <a href="#home" className="nav-link">Home</a>
                            </li>                  
                            <li className="nav-item">
                                <a href="#features" className="nav-link">Compare candidates</a>
                            </li>                    
                                                  
                        </ul>                    
                    </div>
                </div>
            </nav>
        );
    }
  }


export default Header;