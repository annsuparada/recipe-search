import React, {  useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipes } from '../store/actions/index';
import RecipeCard from './RecipeCard';
import { Spin, Alert } from 'antd';

const MainSearch = (props) => {

    useEffect(() => {
        props.getRecipes()
    }, [])

    return (
        <div>
        
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
                                        <RecipeCard
                                            key={recipe.id}
                                            id={recipe.id}
                                            title={recipe.title}
                                            image={recipe.image}
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