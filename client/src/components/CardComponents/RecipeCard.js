import React from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'antd';

const { Meta } = Card;

const RecipeCard = (props) => {
   
    return (
        <div>
            <Link to={`/recipe/${props.prevSearch}/${props.id}`}>
            <Card
                hoverable
                style={{ maxWidth: "300px", marginBottom: "20px"}}
                cover={<img alt={props.title} src={props.image} />}
            >
                <Meta title={props.title} />
            </Card>
            </Link>
            </div>
    );
}

export default RecipeCard;