import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
    return ( 
        <div className="nav-container">
            <Link to="/">Home</Link>
        </div>
     );
}
 
export default Navigation;