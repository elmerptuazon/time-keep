import React, { Component } from 'react';
import HomePage from '../Homepage/main';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        return HomePage;
    }

    render() { 
        console.log('Login rendered' + this.props)
        return ( 
            <div>
                    <label htmlFor="inputEmail">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autoFocus/>
                
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"/>
                
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.HomePage} type="submit">Submit</button>
            </div>
         );
    }
}
 
export default Login;