import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <Link exact="true" className="navbar-brand" to="/"> <img src={logo} className="App-logo" alt="logo" /> React App 16.3</Link>
                    <Link className="btn btn-primary" to="/login">Sign In</Link>
                    
                </div>
                </nav>
                <header className="App-header">
               
                </header>
            </div>
        );
    }
}

export default Header;