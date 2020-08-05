import React from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'antd';
const { Meta } = Card;

const NextRecipes = (props) => {
    return ( 
        <div>
            {console.log('props.nextRecipes', props)}
            <Link to={`/recipe/${props.id}`}>
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
 
export default NextRecipes;