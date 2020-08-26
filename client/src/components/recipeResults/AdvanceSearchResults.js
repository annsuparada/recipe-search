import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAdvanceRecipes, toggleAdvanceSearch } from '../../store/actions/index';
import RecipeCard from '../CardComponents/RecipeCard';
import { Spin, Alert, Input, Button } from 'antd';

const { Search } = Input;

const AdvanceSearchResults = (props) => {
    const form = JSON.parse(localStorage.getItem("advanceSearch"));

    useEffect(() => {
        if (form !== null) {
            props.getAdvanceRecipes(form.recipe, form.minCalories, form.maxCalories,
                form.minCarbs, form.maxCarbs, form.minProtein, form.maxProtein,
                form.minFat, form.maxFat, form.diet, form.intolerances)
        } else {
            props.history.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getSearch = (query) => {
        localStorage.setItem('lastKey', query)
        props.history.push('/recipes')
    }
    const getAdvanceSearch = () => {
        props.toggleAdvanceSearch(true)
        props.history.push('/')
    }
    return (
        <div className="main-search">
            {props.isLoading ? <Spin size="large" tip="Loading..." style={{ margin: "300px auto" }} /> :
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
                            <div className="search">
                                <div className="center">
                                    <Search
                                        placeholder="Find a recipe"
                                        enterButton="Search"
                                        size="large"
                                        onSearch={value => getSearch(value)}
                                        style={{ maxWidth: "500px" }}
                                    />
                                </div>
                                <div className="center">
                                    <Button
                                        onClick={getAdvanceSearch}
                                        size="small"
                                        style={{ marginTop: 15, maxWidth: "120px" }}
                                    >
                                        Advance Search
                                </Button>
                                </div>
                            </div>

                            <div className="recipes-container">
                                {
                                    props.advanceSearchRecipes.map(recipe => (
                                        <RecipeCard
                                            key={recipe.id}
                                            id={recipe.id}
                                            title={recipe.title}
                                            image={recipe.image}

                                        />
                                    ))
                                }
                            </div>
                        </>
                    }
                </>
            }
        </div>
    );
}


const mapStateToProps = state => ({
    isLoading: state.recipesReducer.isLoading,
    error: state.recipesReducer.error,
    advanceSearchRecipes: state.recipesReducer.advanceSearchRecipes,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getAdvanceRecipes, toggleAdvanceSearch }
    )(AdvanceSearchResults)
);