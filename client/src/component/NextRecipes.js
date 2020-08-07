import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getNextRecipes, getRecipes } from '../store/actions/index';
import { Link } from 'react-router-dom'
import { Card } from 'antd';
const { Meta } = Card;

const NextRecipes = (props) => {

    const currentId = props.match.params.id;
    useEffect(() => {
        props.getNextRecipes(currentId)
        props.getRecipes()
    }, [])


    return (
        <div>
            <h4>More beef recipes</h4>
            {props.recipes.filter(item => item.id !== Number(currentId)).slice(0,5).map(item => (
                <div key={item.id}>

                    <Link to={`/`}>
                        <Card
                            hoverable
                            style={{ maxWidth: 290, marginBottom: 20 }}
                            cover={<img alt={item.title} src={item.image} />}
                        >
                            <Meta title={item.title} />
                        </Card>
                    </Link>
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

export default withRouter(
    connect(
        mapStateToProps,
        { getNextRecipes, getRecipes }
    )(NextRecipes)
);