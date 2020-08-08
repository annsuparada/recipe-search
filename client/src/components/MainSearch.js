import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipes } from '../store/actions/index';
import RecipeCard from './CardComponents/RecipeCard';
import { Spin, Alert } from 'antd';
import SearchForm from './SearchForm';

const MainSearch = (props) => {
    const [state, setState] = useState({searchTerm: ""})
    const [query, setQuery] = useState({ingredeint: ""})

    const searchHandleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        // event.preventDefault();
        props.getRecipes(query.ingredeint)
    }
    const getSearch = () => {
        setQuery({ ingredeint: state.searchTerm})
    }

    useEffect(() => {
        handleSubmit()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query.ingredeint])
    console.log('query.ingredeint*****', query.ingredeint)

    
    return (
        <div className="main-search">
            {/* handle loading */}
            {props.isLoading ? <Spin size="large" tip="Loading..." style={{ margin: "300px" }} /> :
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
                            <SearchForm 
                                searchTerm={state.searchTerm}
                                searchHandleChange={searchHandleChange}
                                handleSubmit={handleSubmit}
                                getSearch={getSearch}
                                query={query.ingredeint}
                            />
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                                {
                                    props.recipes.map(recipe => (
                                        <RecipeCard
                                            key={recipe.id}
                                            id={recipe.id}
                                            title={recipe.title}
                                            image={recipe.image}
                                            query={query.ingredeint}
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
    recipes: state.recipesReducer.recipes,
    isLoading: state.recipesReducer.isLoading,
    error: state.recipesReducer.error,
    searchTerm: state.recipesReducer.searchTerm,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getRecipes }
    )(MainSearch)
);