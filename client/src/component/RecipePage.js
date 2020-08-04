import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipeById } from '../store/actions/index';
import { List, Card, Col, Row, Spin, Alert } from 'antd';



const RecipePage = (props) => {
    const id = props.match.params.id;
    const info = props.recipe.info;
    const instructions = props.recipe.instructions;

    useEffect(() => {
        props.getRecipeById(id)
    }, [])

    return (
        <>
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
                            {info &&
                                <div>
                                    <h3>{info.title}</h3>
                                    <img src={info.image} alt={info.title} />
                                    <Card title="Ingredients" style={{ maxWidth: 600 }}>
                                        {info.extendedIngredients && info.extendedIngredients.map(item => (
                                            <div key={item.id}>
                                                <p >{item.original}</p>
                                            </div>
                                        ))}
                                    </Card>
                                </div>
                            }

                            <List
                                style={{ maxWidth: 600 }}
                                itemLayout="horizontal"
                                dataSource={instructions && instructions[0].steps}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={`Step ${item.number}`}
                                            description={item.step}
                                        />
                                    </List.Item>
                                )}
                            />
                        </>
                    }
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