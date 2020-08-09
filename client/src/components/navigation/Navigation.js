import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import logo from '../../styles/images/logo.png';


const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="nav">
                <Link to="/"><img src={logo} alt="recipe finder logo" /></Link>
            </div>
        </div>
    );
}

export default Navigation;