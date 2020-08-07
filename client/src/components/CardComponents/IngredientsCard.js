import React from 'react';
import { Card } from 'antd';

const IngredientsCard = ({ingredients}) => {
    return (
        <>
            <h4>Ingredients</h4>
            <Card style={{ maxWidth: 556 }}>
                {ingredients && ingredients.map(item => (
                    <div key={item.id}>
                        <p >{item.original}</p>
                    </div>
                ))}
            </Card>
        </>
    );
}

export default IngredientsCard;