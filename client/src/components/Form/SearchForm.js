import React from 'react';
import { Input, Button, Form, Row, Col } from 'antd';
import { withRouter } from "react-router-dom";

const SearchForm = (props) => {

    return (
        <div className="search">
            {/* <Input placeholder="Basic usage" /> */}
            {/* <Form onSubmit={props.getSearch} > */}
            {/* <Row>
                    <Col> */}
            <Input style={{ maxWidth: "500px" }}
                placeholder="Find a recipe"
                type="text"
                name="searchTerm"
                value={props.searchTerm}
                onChange={props.searchHandleChange}
                size="large"
            />
            {/* </Col>
                    <Col> */}

            <Button
                type="primary"
                htmlType="submit"
                onClick={props.getSearch}
                style={{ marginLeft: "10px" }}
                size="large"
            >
                Search
                        </Button>
            <Button
                size="large"
            >Advance search
                        </Button>
            {/* </Col>
                </Row> */}
            {/* </Form> */}
        </div>
    );
}

export default withRouter(SearchForm);