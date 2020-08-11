import React, { useEffect } from 'react';
import RecipeCard from '../CardComponents/RecipeCard';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipesByType } from '../../store/actions/index';


const FingerfoodList = (props) => {
    
    useEffect(() => {
        props.getRecipesByType("fingerfood")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="fingerfood-list" style={{ paddingTop: "50px"}}>
            <h3>Fingerfood Recipes</h3>
            <div className="recipes-container">
                {
                    props.recipesByType.slice(0,8).map(recipe => (
                        <RecipeCard
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.title}
                            image={recipe.image}
                            prevSearch="fingerfood"
                        />
                    ))
                }
            </div>

        </div>
    );
}


const mapStateToProps = state => ({
    recipesByType: state.recipesByTypeReducer.recipesByType,
    isLoading: state.recipesByTypeReducer.isLoading,
    error: state.recipesByTypeReducer.error,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getRecipesByType }
    )(FingerfoodList)
);