import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to={{pathname:"/home",state:{"displayName":"Home"}}}>Home</NavLink>
                <NavLink to={{pathname:"/page",state:{"displayName":"Page"}}}>Page</NavLink>
                <NavLink to={{pathname:"/me",state:{"displayName":"Me"}}}>Me</NavLink>

            </div>
        );
    }
}

export default Header;
