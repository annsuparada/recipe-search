import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="nav">
                <div className="left-nav">
                    <Link to="/">Home</Link>
                </div>

                <div className="rigth-nav">
                    <Link to="/">Meal Type</Link>
                    <Link to="/">Ingredient</Link>
                    <Link to="/">Diet</Link>
                    <Link to="/">Cuisnie</Link>
                    <Link to="/">Diet</Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;