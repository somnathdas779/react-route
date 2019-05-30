import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import  history  from './middleware/history';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import { SignupPage } from './components/SignupPage';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Router history={history}>
              <div>
                <Header />
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Footer />
              </div>
              
          </Router>
        
      </div>
    );
  }
}



function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 