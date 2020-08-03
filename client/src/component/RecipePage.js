import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipeById } from '../store/actions/index';
import { Card, Steps } from 'antd';

const { Step } = Steps;

const RecipePage = (props) => {
    const id = props.match.params.id;
    const info = props.recipe.info;
    const instructions = props.recipe.instructions;

    useEffect(() => {
        props.getRecipeById(id)
    }, [])

    return (
        <>
            {info &&
                <div>
                    <img src={info.image} />
                    <h3>{info.title}</h3>
                    <Card title="Ingredients" style={{ maxWidth: 500 }}>
                        {info.extendedIngredients && info.extendedIngredients.map(item => (
                            <div key={item.id}>
                                <p >{item.original}</p>
                            </div>
                        ))}
                    </Card>
                </div>
            }
            {instructions &&
                <>
                    <Steps direction="vertical" current={1}>
                        {instructions.map(step => (
                            <Step title="Finished" description="This is a description." />

                        ))}
                    </Steps>
                </>
            }
        </>
    );
}


const mapStateToProps = state => ({
    recipe: state.recipesReducer.recipe,
    isLoading: state.recipesReducer.isLoading,
    error: state.recipesReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { getRecipeById }
    )(RecipePage)
);