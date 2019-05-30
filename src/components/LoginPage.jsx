import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8 signup-form">
                            <h1> Sign Up </h1>
                            <form className="form-horizontal">
                                
                                <div className="form-group">
                                    <label className="question-text" htmlFor="email">Email address:</label>
                                    <input type="email" className="form-control" id="email"  autoComplete="off"/>
                                </div>
                                <div className="form-group">
                                    <label className="question-text" htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd"  autoComplete="off"/>
                                </div>
                              

                                <div className="form-group">
                                   <label className="container"> Stay Signin
                                   <input type="checkbox" />
                                   <span className="checkmark"></span>
                                   </label>
                               </div>
                                <button type="submit" className="btn btn-success">Login</button>
                            </form>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </div>
        );
    }
}

export default LoginPage;