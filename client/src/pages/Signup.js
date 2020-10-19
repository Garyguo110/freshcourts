import React, {Component} from 'react';
import '../App.css';

class Signup extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="wrapper">
            <h1 className="has-text-white subtitle is-2">Create Your Account!</h1>
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="" placeholder="First Name" name="firstName" noValidate onChange={this.handleChange}></input>
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="" placeholder="Last Name" name="lastName" noValidate onChange={this.handleChange}></input>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="" placeholder="Email" name="email" noValidate onChange={this.handleChange}></input>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="" placeholder="Password" name="password" noValidate onChange={this.handleChange}></input>
                    </div>
                    <div className="createAccount">
                        <button>Continue</button>
                        <small>Already Have an Account?</small>
                    </div>
                </form>
            </div>
        </div>
         );
    }
}
 
export default Signup;