import React from 'react';
import { Input, Button, Form } from 'antd';
import { withRouter } from "react-router-dom";

const SearchForm = (props) => {

    return (
        <div className="search">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form onSubmit={props.getSearch} style={{ width: "100%", display: 'flex', justifyContent: 'center' }} >
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
            </div>
        </div>
    );
}

export default withRouter(SearchForm);