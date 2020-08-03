import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipes } from '../store/actions/index';
import Recipe from './Recipe';
import { Spin, Alert } from 'antd';

const MainSearch = (props) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        props.getRecipes()
    }, [])

    return (
        <div>
            {console.log(props.recipes)}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>

                {/* handle loading */}
                {props.isLoading ? <Spin size="large" tip="Loading..." style={{ marginTop: "300px" }} /> :
                    <>

                    {/* handle error */}
                        {props.error ?
                            <Alert
                                message="Error"
                                description={props.error && props.error}
                                type="error"
                                showIcon
                                style={{ width: "100%" }}
                            /> :
                            <>
                            
                            {/* display data */}
                                {
                                    props.recipes.map(recipe => (
                                        <Recipe
                                            key={recipe.id}
                                            id={recipe.id}
                                            title={recipe.title}
                                            nutrients={recipe.nutrition.nutrients}
                                            image={recipe.image}
                                            isLoading={props.isLoading}
                                        />
                                    ))
                                }
                            </>
                        }
                    </>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    recipes: state.recipesReducer.recipes,
    isLoading: state.recipesReducer.isLoading,
    error: state.recipesReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { getRecipes }
    )(MainSearch)
);