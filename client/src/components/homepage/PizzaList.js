import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipes } from '../../store/actions/index';
import RecipeCard from '../CardComponents/RecipeCard';
import { Spin } from 'antd';

const PizzaList = (props) => {
    useEffect(() => {
        props.getRecipes("pizza")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="pizza-list">
            <h3>Pizza Recipes</h3>
            <div className="recipes-container">
                {props.isLoading ? <Spin size="large" tip="Loading..." /> :
                    <>
                        {
                            props.recipes.slice(0, 8).map(recipe => (
                                <RecipeCard
                                    key={recipe.id}
                                    id={recipe.id}
                                    title={recipe.title}
                                    image={recipe.image}
                                    prevSearch="pizza"
                                />
                            ))
                        }
                    </>}
            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    recipes: state.recipesReducer.recipes,
    isLoading: state.recipesReducer.isLoading,
    error: state.recipesReducer.error,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getRecipes }
    )(PizzaList)
);