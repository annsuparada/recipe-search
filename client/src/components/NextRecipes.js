import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getRecipes } from '../store/actions/index';
import { Card } from 'antd';
const { Meta } = Card;

const NextRecipes = (props) => {

    const currentId = props.currentId;
    useEffect(() => {
        props.getRecipes(props.query)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="next-recipe-container">
            <h4>More Recipes</h4>
            <div className="next-recipe-card">

                {props.recipes.filter(item => item.id !== Number(currentId))
                    .slice(0, 6).map(item => (
                        <div key={item.id}>
                            <a href={`/recipe/${props.query}/${item.id}`}>
                                <Card
                                    hoverable
                                    style={{ marginBottom: 20 }}
                                    cover={<img alt={item.title} src={item.image} />}
                                >
                                    <Meta title={item.title} />
                                </Card>
                            </a>
                        </div>
                    ))}
            </div>


        </div>
    );
}

const mapStateToProps = state => ({
    recipes: state.recipesReducer.recipes,
})

export default
    connect(
        mapStateToProps,
        { getRecipes }
    )(NextRecipes)
