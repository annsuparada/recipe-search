import React, { useState } from 'react';
import { Input, Button, Form, Row, Col } from 'antd';


const SearchForm = (props) => {


    return (
        <div className="search">
            {console.log('searchTerm==>', props)}
            {/* <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                name="searchTerm"
                onSearch={() => props.handleSubmit()}
                onChange={props.searchHandleChange}
            /> */}
            <h6><b>Search result:</b> {props.query}</h6>
            <Form onSubmit={props.getSearch} >
                <Row>
                    <Col>
                        <Input
                            placeholder="Find recipes"
                            type="text"
                            name="searchTerm"
                            value={props.searchTerm}
                            onChange={props.searchHandleChange}
                        />
                    </Col>
                    <Col>

                        <Button
                            type="primary"
                            htmlType="submit"
                            onSubmit={props.getSearch}
                            style={{ marginLeft: "10px" }}
                        >
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default SearchForm;