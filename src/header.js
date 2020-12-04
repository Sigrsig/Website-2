import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return(
        <div>
            <ul id="header-bar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>

        </div>
        
    );

}

export default Header;