import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HomePage extends Component {
    render() {
        return (
            <div>
                <section className="features-icons bg-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-check m-auto text-primary"></i>
                                </div>
                                <h3>Traveller </h3>
                                <Link className="btn btn-primary" to="/signup">Sign Up</Link>
                                <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-check m-auto text-primary"></i>
                                </div>
                                <h3>Travel Gyz</h3>
                                <Link className="btn btn-primary" to="/signup">Sign Up</Link>
                                <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-check m-auto text-primary"></i>
                                </div>
                                <h3>Travel Agent</h3>
                                <Link className="btn btn-primary" to="/signup">Sign Up</Link>
                                <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;