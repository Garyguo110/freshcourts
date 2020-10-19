import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {  }
    render() { 
        return (
            <div className="column is-third">
                <div className="right">
                    <Link to="/signup">
                        <button className="button has-text-white is-text pr-3">Join</button>
                    </Link>
                    <button className="button is-rounded green has-text-white">Login</button>
                </div>
            </div>
         );
    }
}
 
export default Login;