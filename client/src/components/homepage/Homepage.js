import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipes } from '../../store/actions/index';
import PizzaList from './PizzaList';

import { Input } from 'antd';

const { Search } = Input;

const Homepage = (props) => {
    useEffect(() => {
        props.getRecipes("pizza")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="homepage">
            <div className="header">

                <h3>
                    Recipe Finder
                    </h3>
                <Search
                    placeholder="Find a recipe"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                    style={{ maxWidth: "500px" }}
                />
            </div>
            
            <PizzaList />
            {/* <TacoList /> */}

        </div>
    );
}

const mapStateToProps = state => ({
    recipes: state.recipesReducer.recipes,
    isLoading: state.recipesReducer.isLoading,
    error: state.recipesReducer.error,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getRecipes }
    )(Homepage)
);