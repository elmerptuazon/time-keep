import React, { Component } from 'react';
import NavBar from './navbar';

class HomePage extends Component {
    render() {
        console.log('Homepage rendered' + this.props); 
        return ( 
        <NavBar>

        </NavBar> );
    }
}
 
export default HomePage;