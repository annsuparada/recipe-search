import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipeById } from '../store/actions/index';
import { Spin, Alert } from 'antd';
import NextRecipes from './NextRecipes';
import ImageCard from './CardComponents/ImageCard';
import IngredientsCard from './CardComponents/IngredientsCard';
import DirectionsCard from './CardComponents/DirectionsCard';
import NutritionCard from './CardComponents/NutritionCard';


const RecipePage = (props) => {
    const id = props.match.params.id;
    const info = props.recipe;
    const nutrition = info.nutrition;

    useEffect(() => {
        props.getRecipeById(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="recipe-page">
            {props.isLoading ? <Spin size="large" tip="Loading..." style={{ marginTop: "300px" }} /> :
                <>
                    {props.error ?
                        <Alert
                            message="Error"
                            description={props.error && props.error}
                            type="error"
                            showIcon
                            style={{ width: "100%" }}
                        /> :
                        <>
                            <div className="left">
                                <ImageCard
                                    title={info && info.title}
                                    image={info && info.image}
                                    prep={info && info.preparationMinutes}
                                    cook={info && info.cookingMinutes}
                                    total={info && info.readyInMinutes}
                                    servings={info && info.servings}
                                />

                                <IngredientsCard
                                    ingredients={info && info.extendedIngredients}
                                />

                                <DirectionsCard
                                    directions={info.analyzedInstructions}
                                />
                                <NutritionCard
                                    nutrition={nutrition}
                                />
                            </div>
                            <div className="right">
                                <NextRecipes currentId={id} />
                            </div>

                        </>
                    }
                </>
            }
        </div>
    );
}


const mapStateToProps = state => ({
    recipe: state.recipesReducer.recipe,
    nextRecipes: state.recipesReducer.nextRecipes,
    isLoading: state.recipesReducer.isLoading,
    error: state.recipesReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { getRecipeById }
    )(RecipePage)
);