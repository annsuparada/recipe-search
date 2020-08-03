import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipes } from '../store/actions/index';
import Recipe from './Recipe';

const MainSearch = (props) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        props.getRecipes()
    }, [])

    return (
        <div>
            {console.log(props.recipes)}
            {props.recipes.map(recipe => (
                <Recipe 
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    nutrients={recipe.nutrition.nutrients}
                    image={recipe.image}
                />
             ))}
        </div>
      );
}

const mapStateToProps = state => ({
    recipes: state.recipesReducer.recipes
})

export default withRouter(
    connect(
        mapStateToProps,
        { getRecipes}
    ) (MainSearch)
);