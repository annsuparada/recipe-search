import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAdvanceRecipes } from '../../store/actions/index';
import { Form, Input, Select, Tooltip, Button, InputNumber } from 'antd';

const AdvanceSearchForm = (props) => {
    const [form, setForm] = useState({
        recipe: "",
        minCalories: 300,
        maxCalories: 700,
        minCarbs: 30,
        maxCarbs: 100,
        minProtein: 5,
        maxProtein: 100,
        minFat: 5,
        maxFat: 50,
    })

    const getResults = (e) => {
        e.preventDefault()
        props.getAdvanceRecipes(form.recipe, form.minCalories, form.maxCalories,
            form.minCarbs, form.maxCarbs, form.minProtein, form.maxProtein, form.minFat, form.maxFat)
    }
    const handleChangeText = (e, value) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    const handleChangeNumber = (name, value) => {
        setForm({ ...form, [name]: Number(value) })
    }

    return (
        <div className="advance-search-form">
            <Form onSubmit={getResults} style={{ backgroundColor: "white", padding: "20px" }}>
                <Form.Item label="Recipe">
                    <Form.Item
                        name="recipe"
                        noStyle
                    // rules={[{ required: true, message: 'Username is required' }]}
                    >
                        <Input
                            style={{ width: "100%" }}
                            placeholder="Recipe"
                            name="recipe"
                            value={form.recipe}
                            onChange={handleChangeText}
                        />
                    </Form.Item>
                </Form.Item>

                <Form.Item label="Calories">
                    <Form.Item
                        name="minCalories"
                        noStyle
                    >
                        <InputNumber
                            // style={{ width: 160 }}
                            placeholder="Min"
                            name="minCalories"
                            value={form.minCalories}
                            onChange={value => handleChangeNumber("minCalories", value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="maxCalories"
                        noStyle
                    >
                        <InputNumber
                            // style={{ width: 160 }}
                            placeholder="Max"
                            name="maxCalories"
                            value={form.maxCalories}
                            onChange={value => handleChangeNumber("maxCalories", value)}
                        />
                    </Form.Item>
                    <Tooltip>Cal</Tooltip>
                </Form.Item>

                <Form.Item label="Carbs">
                    <Form.Item
                        name="minCarbs"
                        noStyle
                    >
                        <InputNumber
                            // style={{ width: 160 }}
                            placeholder="Min"
                            name="minCarbs"
                            value={form.minCarbs}
                            onChange={value => handleChangeNumber("minCarbs", value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="maxCarbs"
                        noStyle
                    >
                        <InputNumber
                            // style={{ width: 160 }}
                            placeholder="Max"
                            name="maxCarbs"
                            value={form.maxCarbs}
                            onChange={value => handleChangeNumber("maxCarbs", value)}
                        />
                    </Form.Item>
                    <Tooltip>g</Tooltip>
                </Form.Item>

                <Form.Item label="Protein">
                    <Form.Item
                        name="minProtein"
                        noStyle
                    >
                        <InputNumber
                            // style={{ width: 160 }}
                            placeholder="Min"
                            name="minProtein"
                            value={form.minProtein}
                            onChange={value => handleChangeNumber("minProtein", value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="maxProtein"
                        noStyle
                    >
                        <InputNumber
                            // style={{ width: 160 }}
                            placeholder="Max"
                            name="maxProtein"
                            value={form.maxProtein}
                            onChange={value => handleChangeNumber("maxProtein", value)}
                        />
                    </Form.Item>
                    <Tooltip>g</Tooltip>
                </Form.Item>

                <Form.Item label="Fat">
                    <Form.Item
                        name="minFat"
                        noStyle
                    >
                        <InputNumber
                            // style={{ width: 160 }}
                            placeholder="Min"
                            name="minFat"
                            value={form.minFat}
                            onChange={value => handleChangeNumber("minFat", value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="maxFat"
                        noStyle
                    >
                        <InputNumber
                            // style={{ width: 160 }}
                            placeholder="Max"
                            name="maxFat"
                            value={form.maxFat}
                            onChange={value => handleChangeNumber("maxFat", value)}
                        />
                    </Form.Item>
                    <Tooltip>g</Tooltip>
                </Form.Item>
                <button onClick={getResults}>Search</button>
            </Form>
        </div>
    );
}

const mapStateToProps = state => ({
    advanceSearchRecipes: state.advanceSearchReducer.advanceSearchRecipes,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getAdvanceRecipes }
    )(AdvanceSearchForm)
);