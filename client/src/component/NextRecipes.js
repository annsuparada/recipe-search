import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getNextRecipes } from '../store/actions/index';
import { Link } from 'react-router-dom'
import { Card } from 'antd';
const { Meta } = Card;

const NextRecipes = (props) => {

    useEffect(() => {
        props.getNextRecipes()
    }, [])

    const currentId = props.match.params.id;
    const data = []
    const recipes = props.nextRecipes
    for (let i = 0, count = 0; i < recipes.length; i++) {
        if (recipes[i].id !== currentId 
            && recipes[i].analyzedInstructions.length > 0
            && count < 7) {
                count ++
                console.log(recipes[i].id, currentId)
            data.push({
                title: recipes[i].title,
                image: recipes[i].image,
                id: recipes[i].id
            }
            )
        }
    }

    return (
        <div>
            {console.log('props.nextRecipes', data)}
            <h4>More beef recipes</h4>
            {data.map(item => (
                <div key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                        {/* {console.log('id',item.id)} */}
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
})

export default withRouter(
    connect(
        mapStateToProps,
        { getNextRecipes }
    )(NextRecipes)
);