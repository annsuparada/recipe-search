import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getNextRecipes, getRecipes } from '../store/actions/index';
import { Card } from 'antd';
const { Meta } = Card;

const NextRecipes = (props) => {

    const currentId = props.currentId;
    useEffect(() => {
        props.getNextRecipes(currentId)
        props.getRecipes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

// const nextPage = (id) => {
//     history.push
// }
    return (
        <div>
            <h4>More beef recipes</h4>
            {props.recipes.filter(item => item.id !== Number(currentId)).slice(0,5).map(item => (
                <div key={item.id}>
                    <a href={`/recipe/${item.id}`}>
                        <Card
                            hoverable
                            style={{ maxWidth: 290, marginBottom: 20 }}
                            cover={<img alt={item.title} src={item.image} />}
                        >
                            <Meta title={item.title} />
                        </Card>
                    </a>
                </div>
            ))}

            
        </div>
    );
}

const mapStateToProps = state => ({
    nextRecipes: state.recipesReducer.nextRecipes,
    recipes: state.recipesReducer.recipes,
    test: state.recipesReducer.test,

})

export default 
    connect(
        mapStateToProps,
        { getNextRecipes, getRecipes }
    )(NextRecipes)
