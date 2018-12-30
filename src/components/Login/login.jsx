import React, { Component } from 'react';
import HomePage from '../Homepage/main';

class Login extends Component {
    state = {  }
    render() { 
        console.log('Login rendered' + this.props)
        return ( 
            <div>
                    <label for="inputEmail">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                
                    <label for="inputPassword">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password"/>
                
                    <button className="btn btn-lg btn-primary btn-block" onClick={<HomePage />} type="submit">Submit</button>
            </div>
         );
    }
}
 
export default Login;