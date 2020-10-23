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
                        <label className="subtitle is-5 mb-0 has-text-black" htmlFor="firstName">First Name</label>
                        <input type="text" className="subtitle is-6" placeholder="First Name" name="firstName" noValidate onChange={this.handleChange}></input>
                    </div>
                    <div className="lastName">
                        <label className="subtitle is-5 mb-0 has-text-black" htmlFor="lastName">Last Name</label>
                        <input type="text" className="subtitle is-6" placeholder="Last Name" name="lastName" noValidate onChange={this.handleChange}></input>
                    </div>
                    <div className="email">
                        <label className="subtitle is-5 mb-0 has-text-black" htmlFor="email">Email</label>
                        <input type="email" className="subtitle is-6" placeholder="Email" name="email" noValidate onChange={this.handleChange}></input>
                    </div>
                    <div className="password">
                        <label className="subtitle is-5 mb-0 has-text-black" htmlFor="password">Password</label>
                        <input type="password" className="subtitle is-6" placeholder="Password" name="password" noValidate onChange={this.handleChange}></input>
                    </div>
                    <div className="createAccount">
                        <button className="subtitle is-5 mb-2 has-text-white has-text-weight-medium">Continue</button>
                        <small>Already Have an Account?</small>
                    </div>
                </form>
            </div>
        </div>
         );
    }
}
 
export default Signup;