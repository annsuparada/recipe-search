import React from 'react';
import { Input, Button, Form, Row, Col } from 'antd';


const SearchForm = (props) => {


    return (
        <div className="search">
            <h6><b>Search result:</b> {props.prevSearch}</h6>
            <Form onSubmit={props.getSearch} >
                <Row>
                    <Col>
                        <Input
                            placeholder="Find a recipe"
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
                            onClick={props.getSearch}
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