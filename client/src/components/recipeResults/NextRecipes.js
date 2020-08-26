import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getRecipes, getAdvanceRecipes } from '../../store/actions/index';
import { Card } from 'antd';
const { Meta } = Card;

const NextRecipes = (props) => {
    const form = JSON.parse(localStorage.getItem("advanceSearch"));
    const currentId = props.currentId;

    useEffect(() => {
        if (form !== null) {
            props.getAdvanceRecipes(form.recipe, form.minCalories, form.maxCalories,
                form.minCarbs, form.maxCarbs, form.minProtein, form.maxProtein,
                form.minFat, form.maxFat, form.diet, form.intolerances)
        } else {
            props.getRecipes(props.query)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="next-recipe-container">
            <h4>More Recipes</h4>
            <div className="next-recipe-card">
                {console.log('advanceSearchRecipes', props.advanceSearchRecipes)}
                {console.log('props.recipes', props.recipes)}
                {props.recipes.filter(item => item.id !== Number(currentId))
                    .slice(0, 6).map(item => (
                        <div key={item.id}>
                            <a href={`/recipe/${props.query}/${item.id}`}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: 20, maxWidth: "250px" }}
                                    cover={<img alt={item.title} src={item.image} />}
                                >
                                    <Meta title={item.title} />
                                </Card>
                            </a>
                        </div>
                    ))}
                {props.advanceSearchRecipes.filter(item => item.id !== Number(currentId))
                    .slice(0, 6).map(item => (
                        <div key={item.id}>
                            <a href={`/recipe/${props.query}/${item.id}`}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: 20, maxWidth: "250px" }}
                                    cover={<img alt={item.title} src={item.image} />}
                                >
                                    <Meta title={item.title} />
                                </Card>
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    recipes: state.recipesReducer.recipes,
    advanceSearchRecipes: state.recipesReducer.advanceSearchRecipes,
})

export default
    connect(
        mapStateToProps,
        { getRecipes, getAdvanceRecipes }
    )(NextRecipes)
