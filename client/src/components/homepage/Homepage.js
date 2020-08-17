import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipes } from '../../store/actions/index';
import PizzaList from './PizzaList';
import FingerfoodList from './FingerfoodList';
import AdvanceSearchForm from '../Form/AdvanceSearchFrom';
import { Input } from 'antd';

const { Search } = Input;

const Homepage = (props) => {
    const [advanceSearch, setAdvanceSearch] = useState(false)

    const getAdvanceSearch = () => {
        setAdvanceSearch(true)
    }

    const cancleAdvanceSearch = () => {
        setAdvanceSearch(false)
    }

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

                <h3>Recipe Finder</h3>
                {advanceSearch ? 
                <>
                <Search
                    placeholder="Find a recipe"
                    enterButton="Search"
                    size="large"
                    onSearch={value => getSearch(value)}
                    style={{ maxWidth: "500px" }}
                    />
                <button onClick={getAdvanceSearch}>Advance Search</button>
                    </> :
                    <>
                    <AdvanceSearchForm />
                    <button onClick={cancleAdvanceSearch}>Cancle</button>
                    </>
                }
                
            </div>
            
            {/* <PizzaList />
            <FingerfoodList /> */}
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