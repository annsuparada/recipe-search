import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAdvanceRecipes, getFetchAdvance } from '../../store/actions/index';
import { Form, Input, Select, Tooltip, Button, InputNumber } from 'antd';

const { Option } = Select;

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
        dietPlans: "",
        intolerances: ""
    })

    const getResults = (e) => {
        e.preventDefault()
        localStorage.setItem('advanceSearch', JSON.stringify(form))
        props.getFetchAdvance(true)
        props.history.push('/recipes');
    }


    const handleChangeText = (name, value) => {
        setForm({ ...form, [name]: value })

    }

    const handleChangeNumber = (name, value) => {
        setForm({ ...form, [name]: Number(value) })
    }

    const dietPlans = [
        <Option key="Gluten Free">Gluten Free</Option>,
        <Option key="Ketogenic">Ketogenic</Option>,
        <Option key="Vegetarian">Vegetarian</Option>,
        <Option key="Vegan">Vegan</Option>,
    ];

    const allergyIngredients = [
        <Option key="Dairy">Dairy</Option>, <Option key="Wheat">Wheat</Option>,
        <Option key="Gluten">Gluten</Option>, <Option key="Egg">Egg</Option>,
        <Option key="Grain">Grain</Option>, <Option key="Peanut">Peanut</Option>,
        <Option key="Seafood">Seafood</Option>, <Option key="Sesame">Sesame</Option>,
        <Option key="Shellfish">Shellfish</Option>, <Option key="Soy">Soy</Option>,
        <Option key="Sulfite">Sulfite</Option>, <Option key="Tree Nut">Tree Nut</Option>,
    ];

    return (
        <div className="advance-search-form" style={{ width: "100%" }}>
            <Form
                onSubmit={getResults}
                style={{ backgroundColor: "white", padding: "20px", 
                maxWidth: 500, margin: "0 auto", 
                border: "1px solid #d9d9d9", marginBottom: "20px"}}
                labelCol={{ span: 5 }}
            >
                <Form.Item label="Recipe">
                    <Form.Item
                        name="recipe"
                        noStyle
                    >
                        <Input
                            placeholder="Recipe"
                            name="recipe"
                            value={form.recipe}
                            onChange={event => handleChangeText("recipe", event.target.value)}
                        />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Diet">
                    <Form.Item
                        name="dietPlans"
                        noStyle
                    >
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select diet plan"
                            onChange={value => handleChangeText("dietPlans", value)}
                        >
                            {dietPlans}
                        </Select>
                    </Form.Item>
                </Form.Item>

                <Form.Item label="Food Allergy">
                    <Form.Item
                        name="intolerances"
                        noStyle
                    >
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select food alergy"
                            onChange={value => handleChangeText("intolerances", value)}
                        >
                            {allergyIngredients}
                        </Select>
                    </Form.Item>
                </Form.Item>

                <Form.Item label="Calories">
                    <Form.Item
                        name="minCalories"
                        noStyle
                    >
                        <InputNumber
                            style={{ marginRight: 10 }}
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
                            style={{ marginRight: 10 }}
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
                            style={{ marginRight: 10 }}
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
                            style={{ marginRight: 10 }}
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
                            style={{ marginRight: 10 }}
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
                            style={{ marginRight: 10 }}
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
                            style={{ marginRight: 10 }}
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
                            style={{ marginRight: 10 }}
                            placeholder="Max"
                            name="maxFat"
                            value={form.maxFat}
                            onChange={value => handleChangeNumber("maxFat", value)}
                        />
                    </Form.Item>
                    <Tooltip>g</Tooltip>
                </Form.Item>


                <div style={{ display: 'flex', justifyContent: "center"}}>

                <Button
                    onClick={getResults}
                    type="primary"
                    htmlType="submit"
                    style={{ marginRight: 10 }}
                    >
                    Search
                    </Button>
                <Button onClick={props.cancleAdvanceSearch}>Cancle</Button>
                    </div>
            </Form>
        </div>
    );
}

const mapStateToProps = state => ({
    advanceSearchRecipes: state.recipesReducer.advanceSearchRecipes,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getAdvanceRecipes, getFetchAdvance }
    )(AdvanceSearchForm)
);