import React, { Component } from 'react';
import NavBar from './navbar';

class HomePage extends Component {
    render() {
        console.log('Homepage rendered' + this.props); 
        return ( 
            <div>
                <NavBar />
            </div>
         );
    }
}
 
export default HomePage;