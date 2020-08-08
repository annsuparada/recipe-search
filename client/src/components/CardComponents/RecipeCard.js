import React from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'antd';

const { Meta } = Card;

const RecipeCard = (props) => {
   
    return (
        <div>
            <Link to={`/recipe/${props.query}/${props.id}`}>
            <Card
                hoverable
                style={{ maxWidth: 290, marginBottom: 20}}
                cover={<img alt={props.title} src={props.image} />}
            >
                <Meta title={props.title} />
            </Card>
            </Link>
            </div>
    );
}

export default RecipeCard;