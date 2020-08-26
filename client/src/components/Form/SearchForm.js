import React from 'react';
import { Input, Button, Form } from 'antd';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleAdvanceSearch } from '../../store/actions/index';

const SearchForm = (props) => {
    const toggle = () => {
        props.toggleAdvanceSearch(true)
        props.history.push('/')
    }
    return (
        <div className="search">
            <Form onSubmit={props.getSearch} className="center" >
                <Input
                    style={{ maxWidth: "500px" }}
                    placeholder="Find a recipe"
                    type="text"
                    name="searchTerm"
                    value={props.searchTerm}
                    onChange={props.searchHandleChange}
                    size="large"
                />

                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={props.getSearch}
                    size="large"
                >
                    Search
                </Button>
            </Form>
            <div className="center">
                <Button
                    onClick={toggle}
                    size="small"
                    style={{ marginTop: 15, maxWidth: "120px" }}
                >
                    Advance Search
                </Button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    toggleAdvanceState: state.recipesReducer.toggleAdvanceState,
})

export default withRouter(
    connect(
        mapStateToProps,
        { toggleAdvanceSearch }
    )(SearchForm)
);