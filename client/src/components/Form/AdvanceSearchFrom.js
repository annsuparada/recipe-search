import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAdvanceRecipes } from '../../store/actions/index';
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
        <div className="advance-search-form">
            {console.log('advanceSearchRecipes=====', props.advanceSearchRecipes)}
            <Form onSubmit={getResults} style={{ backgroundColor: "white", padding: "20px" }}>
                <Form.Item label="Recipe">
                    <Form.Item
                        name="recipe"
                        noStyle
                    >
                        <Input
                            style={{ width: "100%" }}
                            placeholder="Recipe"
                            name="recipe"
                            value={form.recipe}
                            onChange={value => handleChangeText("recipe", value)}
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

                <Form.Item label="Allergy ingredients">
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
                <button onClick={getResults}>Search</button>
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
        { getAdvanceRecipes }
    )(AdvanceSearchForm)
);