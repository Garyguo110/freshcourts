import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const passswordRegex = RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
);
  

const formValid = ({formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach( val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    });

    return valid;
};

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }
    
    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
            -- SUBMITTING -- 
            FirstName: ${this.state.firstName}
            LastName: ${this.state.lastName}
            Email: ${this.state.email}
            PassWord: ${this.state.password}
            `)
        } else {
            console.error('Form invalid');
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        console.log("Name: ", name);
        console.log("Value: ", value);

        switch (name) {
            case 'firstName':
                formErrors.firstName = 
                    value.length < 3
                    ? "Minimum 3 characters required"
                    : "";
                break;
            case 'lastName':
                formErrors.lastName = 
                    value.length < 3
                    ? "Minimum 3 characters required"
                    : "";
                break;
            case 'email':
                formErrors.email = 
                    emailRegex.test(value)
                    ? ""
                    : "Invalid email address";
                break;
            case 'password':
                formErrors.password =
                    passswordRegex.test(value)
                    ? ""
                    : "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value}, () => console.log(this.state));
    }

    render() { 
        const {formErrors} = this.state;

        return ( 
        <div className="wrapper">
            <h1 className="has-text-white subtitle is-2">Create Your Account!</h1>
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="firstName">
                        <label className="subtitle is-5 mb-0 has-text-black" htmlFor="firstName">First Name</label>
                        <input type="text" className={formErrors.firstName.length > 0 ? "subtitle is-6 my-0 error": "subtitle is-6 my-0"} placeholder="First Name" name="firstName" noValidate onChange={this.handleChange}></input>
                        {formErrors.firstName.length > 0 && (
                            <span className="errorMessage subtitle is-7">{formErrors.firstName}</span>
                        )}
                    </div>
                    <div className="lastName">
                        <label className="subtitle is-5 mb-0 has-text-black" htmlFor="lastName">Last Name</label>
                        <input type="text" className={formErrors.lastName.length > 0 ? "subtitle is-6 my-0 error": "subtitle is-6 my-0"} placeholder="Last Name" name="lastName" noValidate onChange={this.handleChange}></input>
                        {formErrors.lastName.length > 0 && (
                            <span className="errorMessage subtitle is-7">{formErrors.lastName}</span>
                        )}
                    </div>
                    <div className="email">
                        <label className="subtitle is-5 mb-0 has-text-black" htmlFor="email">Email</label>
                        <input type="email" className={formErrors.email.length > 0 ? "subtitle is-6 my-0 error": "subtitle is-6 my-0"} placeholder="Email" name="email" noValidate onChange={this.handleChange}></input>
                        {formErrors.email.length > 0 && (
                            <span className="errorMessage subtitle is-7">{formErrors.email}</span>
                        )}
                    </div>
                    <div className="password">
                        <label className="subtitle is-5 mb-0 has-text-black" htmlFor="password">Password</label>
                        <input type="password" className={formErrors.password.length > 0 ? "subtitle is-6 my-0 error": "subtitle is-6 my-0"} placeholder="Password" name="password" noValidate onChange={this.handleChange}></input>
                        {formErrors.password.length > 0 && (
                            <span className="errorMessage subtitle is-7">{formErrors.password}</span>
                        )}
                    </div>
                    <div className="createAccount">
                        <Link to="/hotCourtSelection">
                            <button className="button subtitle is-rounded is-5 mb-1 has-text-white has-text-weight-medium">Continue</button>
                        </Link>
                        <button className="button has-text-white mt-0 is-text">Already Have an Account?</button>
                    </div>
                </form>
            </div>
        </div>
         );
    }
}
 
export default Signup;