import React, { Component } from 'react';
import { userActions } from '../actions/signup.action';
import { connect } from 'react-redux';

class SignupPage extends Component {
    tourism = [];
    constructor(props){
        super(props);

        this.state = {
            signupForm :{
                username : "",
                email : "",
                password : "",
                confirmPassword: "",
                gender:"",
                country : "",
                tourism :[],
                terms :false
            },
            submitted: false
        };

        this.handleChnage = this.handleChnage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChnage(event){

        
       
        console.log(event.target.value);

        const { name, value } = event.target;
        const type = event.type;
        const { signupForm } = this.state;

        if(event.target.name == "terms"){

            this.setState({
                signupForm: {
                    ...signupForm,
                    [name]: event.target.checked
                }
            });

        }if(event.target.name == "tourism"){

           

            const index = this.tourism.indexOf(event.target.value);

            console.log(index);
            
            if(index >= 0){
                if(event.target.checked){
                  
                }else{
                    this.tourism.splice(index, 1);
                }

            }else{

                if(event.target.checked){
                    this.tourism.push(event.target.value);
                }

            }
            

            this.setState({
                signupForm: {
                    ...signupForm,
                    [name]:  this.tourism
                }
            });


        }else{

            this.setState({
                signupForm: {
                    ...signupForm,
                    [name]: value
                }
            });
            
        }
       
      

    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({ submitted: true });
        const { signupForm } = this.state;
        const { dispatch } = this.props;
        

        if (signupForm.username && signupForm.email && signupForm.password && signupForm.confirmPassword) {
            dispatch(userActions.signup(signupForm));
        }
    }

    render() {
        const { signupForm, submitted } = this.state;
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8 signup-form">
                            <h1> Sign Up </h1>
                            <form className="form-horizontal" name="form" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="question-text" htmlFor="user">User Name:</label>
                                    <input type="text"  name="username" value={signupForm.username} onChange={this.handleChnage} className="form-control" id="user"  autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <label className="question-text" htmlFor="email">Email address:</label>
                                    <input type="email" name="email" className="form-control" value={signupForm.email} onChange={this.handleChnage} id="email"  autoComplete="off"/>
                                </div>
                                <div className="form-group">
                                    <label className="question-text" htmlFor="pwd">Password:</label>
                                    <input type="password" name="password" className="form-control" value={signupForm.password} onChange={this.handleChnage} id="pwd"  autoComplete="off"/>
                                </div>
                                <div className="form-group">
                                    <label className="question-text" htmlFor="cpwd">Confirm Password:</label>
                                    <input type="password" name="confirmPassword" value={signupForm.confirmPassword} onChange={this.handleChnage} className="form-control" id="cpwd"  autoComplete="off"/>
                                </div>
                                <div className="form-group">       
                                    <label className="question-text" htmlFor="gender">Gener:</label>
                                    <label className="container">
                                    <input type="radio" value={signupForm.gender} onChange={this.handleChnage}   name="gender"/> Male
                                    <span className="checkmark"></span>
                                    </label>
                                    <label className="container">
                                    <input type="radio" value={signupForm.gender} onChange={this.handleChnage}  name="gender"/> Female
                                    <span className="checkmark"></span>
                                    </label> 
                                </div>

                                <div className="form-group">
                                    <label className="question-text" htmlFor="country">Select Country:</label>
                                    <select id="country" name="country" value={signupForm.country} onChange={this.handleChnage}  className="custom-select">
                                        <option value="">Country...</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="India">India</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States of America">United States of America</option>
                                    </select> 
                                </div>

                                <div className="form-group">
                                   
                                    <label className="question-text" htmlFor="Tourism‎">Tourism you like:</label>
                                    <label className="container"> Adventure travel
                                    <input type="checkbox" name="tourism" value="Adventure travel" onChange={this.handleChnage}  />
                                    <span className="checkmark"></span>
                                    </label>
                                    
                                 
                                    <label className="container">Ecotourism‎
                                    <input type="checkbox"  name="tourism" value="Ecotourism‎" onChange={this.handleChnage}/>
                                    <span className="checkmark"></span>
                                    </label>
                                   
                                    <label className="container">Cultural tourism
                                    <input type="checkbox" name="tourism" value="Cultural tourism" onChange={this.handleChnage} />
                                    <span className="checkmark"></span>
                                    </label>
                                 
                                    <label className="container">Religious tourism
                                    <input type="checkbox" name="tourism" value="Religious tourism" onChange={this.handleChnage}/>
                                    <span className="checkmark"></span>
                                    </label>
                                 
                                </div>

                                <div className="form-group terms">
                                   <label className="container">I agree to terms and conditions
                                   <input type="checkbox" name="terms"   onClick={this.handleChnage}/>
                                   <span className="checkmark"></span>
                                   </label>
                               </div>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </div>
           
        );
    }
}


function mapStateToProps(state) {
    const { onsignup } = state.signup;
    return {
        onsignup
    };
}

const connectedSignupPage = connect(mapStateToProps)(SignupPage);
export { connectedSignupPage as SignupPage };