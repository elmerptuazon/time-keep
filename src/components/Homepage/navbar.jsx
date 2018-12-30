import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        console.log('NavBar Rendered' + this.props); 
        return (
        <div>    
            <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <a class="navbar-brand">Top navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link">Home <span>(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
         );
    }
}
 
export default NavBar;