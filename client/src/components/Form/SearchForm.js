import React from 'react';
import { Input, Button, Form, Row, Col } from 'antd';
import { withRouter } from "react-router-dom";

const SearchForm = (props) => {

    return (
        <div className="search">
            <div style={{ display: 'flex', justifyContent: 'center'}}>

                <Input style={{ maxWidth: "500px" }}
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
                    // style={{ margin: "0 10px 0 10px" }}
                    size="large"
                >
                    Search
            </Button>
                
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
                <Button
                    size="small"
                    htmlType="submit"
                    onClick={props.getAdvanceSearch}
                >
                    Advance search
            </Button>
            </div> */}
        </div>
    );
}

export default withRouter(SearchForm);