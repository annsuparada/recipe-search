import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipes, getAdvanceRecipes } from '../store/actions/index';
import RecipeCard from './CardComponents/RecipeCard';
import { Spin, Alert } from 'antd';
import SearchForm from './Form/SearchForm';
import AdvanceSearchForm from './Form/AdvanceSearchFrom';

const MainSearch = (props) => {
    const form = JSON.parse(localStorage.getItem("advanceSearch"));
    const prevSearch = localStorage.getItem("lastKey");
    
  

    const [state, setState] = useState({ searchTerm: "" });
    const [query, setQuery] = useState({ ingredeint: "pizza" });
    const [advanceSearch, setAdvanceSearch] = useState(false)

    const getAdvanceSearch = () => {
        setAdvanceSearch(true)
        props.history.push('/')
    }

    const cancleAdvanceSearch = () => {
        setAdvanceSearch(false)
    }

    const searchHandleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        if (prevSearch !== null) {
            props.getRecipes(prevSearch)
        } else {
            props.getRecipes(query.ingredeint)
        }
    }

    const getSearch = () => {
        setQuery({ ingredeint: state.searchTerm })
        localStorage.setItem('lastKey', state.searchTerm)
        localStorage.removeItem('advanceSearch')
        setState({searchTerm: ""})
    }

    useEffect(() => {
        if (prevSearch === null) {
            localStorage.setItem('lastKey', query.ingredeint)
        }
        handleSubmit()

        if (form !== null) {
            
            props.getAdvanceRecipes(form.recipe, form.minCalories, form.maxCalories,
                form.minCarbs, form.maxCarbs, form.minProtein, form.maxProtein,
                form.minFat, form.maxFat, form.diet, form.intolerances)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query.ingredeint])



    return (
        <div className="main-search">
            {props.isLoading ? <Spin size="large" tip="Loading..." style={{ margin: "300px auto" }} /> :
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
                            {/* {!advanceSearch ?  */}
                            <SearchForm
                            searchTerm={state.searchTerm}
                            searchHandleChange={searchHandleChange}
                            handleSubmit={handleSubmit}
                            getSearch={getSearch}
                            query={query.ingredeint}
                            prevSearch={prevSearch}
                            getAdvanceSearch={getAdvanceSearch}
                            /> 
                            {/* : */}
                            {/* <AdvanceSearchForm 
                            cancleAdvanceSearch={cancleAdvanceSearch}
                            />
                        } */}
                            <div className="recipes-container">
                                {props.recipes.length > 0 ?
                                    <>
                                    {props.advanceSearchRecipes.length > 0 ? 
                                    <>
                                    {
                                            props.advanceSearchRecipes.map(recipe => (
                                                <RecipeCard
                                                key={recipe.id}
                                                id={recipe.id}
                                                title={recipe.title}
                                                image={recipe.image}
                                                prevSearch={prevSearch}
                                                />
                                                ))
                                            }
                                    </> :
                                    <>

                                        {
                                            props.recipes.map(recipe => (
                                                <RecipeCard
                                                key={recipe.id}
                                                id={recipe.id}
                                                title={recipe.title}
                                                image={recipe.image}
                                                prevSearch={prevSearch}
                                                />
                                                ))
                                            }
                                            </>
                                        }
                                        
                                    </>
                                    : <Alert message={`No result of "${prevSearch}" Plaese try again!`} type="info" />}
                            </div> 
                        </>
                    }
                </>
            }
        </div>
    );
}

const mapStateToProps = state => ({
    recipes: state.recipesReducer.recipes,
    isLoading: state.recipesReducer.isLoading,
    error: state.recipesReducer.error,
    advanceSearchRecipes: state.recipesReducer.advanceSearchRecipes,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getRecipes, getAdvanceRecipes }
    )(MainSearch)
);