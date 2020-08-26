import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipes, toggleAdvanceSearch } from '../../store/actions/index';
import PizzaList from './PizzaList';
import FingerfoodList from './FingerfoodList';
import AdvanceSearchForm from '../Form/AdvanceSearchFrom';
import { Input, Button } from 'antd';

const { Search } = Input;

const Homepage = (props) => {

    useEffect(() => {
        props.getRecipes("pizza")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getSearch = (query) => {
        localStorage.setItem('lastKey', query)
        props.history.push('/recipes')
    }

    return (
        <div className="homepage">
            <div className="header">
        {console.log('fatchAdvance', props.fatchAdvance)}
                <h3>Recipe Finder</h3>
                {!props.toggleAdvanceState ?
                    <>
                        <Search
                            placeholder="Find a recipe"
                            enterButton="Search"
                            size="large"
                            onSearch={value => getSearch(value)}
                            style={{ maxWidth: "500px" }}
                        />
                        <Button
                            onClick={() => props.toggleAdvanceSearch(true)}
                            size="small"
                            style={{ marginTop: 15 }}
                        >
                            Advance Search
                        </Button>
                    </> :
                    <>
                        <AdvanceSearchForm
                            cancleAdvanceSearch={() => props.toggleAdvanceSearch(false)}
                        />
                        
                    </>
                }

            </div>

            <PizzaList />
            <FingerfoodList />
        </div>
    );
}

const mapStateToProps = state => ({
    recipes: state.recipesReducer.recipes,
    isLoading: state.recipesReducer.isLoading,
    error: state.recipesReducer.error,
    toggleAdvanceState: state.recipesReducer.toggleAdvanceState,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getRecipes, toggleAdvanceSearch}
    )(Homepage)
);