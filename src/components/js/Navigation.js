import React, {Component} from 'react';


class Navigation extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a className="text-white"><h3>Inicio</h3></a>
                <a href="" className="text-white">Login</a>
            </nav>
        )
    }
}

export default Navigation;