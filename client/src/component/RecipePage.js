import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipeById, getNextRecipes } from '../store/actions/index';
import { List, Card, Spin, Alert } from 'antd';
import NextRecipes from './NextRecipes';



const RecipePage = (props) => {
    const id = props.match.params.id;
    const info = props.recipe;
    const nutrition = info.nutrition;

    useEffect(() => {
        props.getRecipeById(id)
        props.getNextRecipes(id)
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
                                {info &&
                                    <div>
                                        <h3>{info.title}</h3>
                                        <img src={info.image} alt={info.title} />
                                        <Card size="small" style={{ maxWidth: 556 }}>
                                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                                <h6><b>Prep:</b> {info.preparationMinutes} mins</h6>
                                                <h6><b>Cook:</b> {info.cookingMinutes} mins</h6>
                                                <h6><b>Total:</b> {info.readyInMinutes} mins</h6>
                                                <h6><b>Serving:</b> {info.servings}</h6>
                                            </div>
                                        </Card>
                                        <h4>Ingredients</h4>
                                        <Card style={{ maxWidth: 556 }}>
                                            {info.extendedIngredients && info.extendedIngredients.map(item => (
                                                <div key={item.id}>
                                                    <p >{item.original}</p>
                                                </div>
                                            ))}
                                        </Card>

                                    </div>
                                }
                                <h4>Directions</h4>
                                <List
                                    style={{ maxWidth: 556 }}
                                    itemLayout="horizontal"
                                    dataSource={info.analyzedInstructions && info.analyzedInstructions[0].steps}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={`Step ${item.number}`}
                                                description={item.step}
                                            />
                                        </List.Item>
                                    )}
                                />
                                <h4>Nutrition Facts</h4>
                                <p><b>Per serving</b></p>
                                {nutrition &&
                                    <ul>
                                        <li>{nutrition.nutrients[0].amount} Calories</li>
                                        <li>{nutrition.nutrients[8].amount} g Protien</li>
                                        <li>{nutrition.nutrients[3].amount} g Carb</li>
                                        <li>{nutrition.nutrients[1].amount} g Fat</li>
                                    </ul>
                                }
                            </div>
                            <div className="right">
                                <NextRecipes />
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
        { getRecipeById, getNextRecipes }
    )(RecipePage)
);