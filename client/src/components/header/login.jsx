import React, { Component } from 'react';

class Login extends Component {
    state = {  }
    render() { 
        return (
            <div className="column is-third">
                <div className="right">
                    <button className="button has-text-white is-text pr-3 noHover">Join</button> 
                    <button className="button is-rounded green has-text-white">Login</button>
                </div>
            </div>
         );
    }
}
 
export default Login;