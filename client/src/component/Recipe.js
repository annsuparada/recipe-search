import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const Recipe = ({ id, title, image, nutrients, isLoading}) => {

    return (
        <>
            <Card
                hoverable
                style={{ maxWidth: 290, marginBottom: 20}}
                cover={<img alt={title} src={image} />}
                loading={isLoading}
            >
                <Meta title={title} />
            </Card>
            {/* <img src={image} />
            <h4>{title}</h4>
            <p>Calrories: {nutrients[0].amount} {nutrients[0].unit}</p>
            <p>Protien: {nutrients[9].amount} {nutrients[9].unit}</p>
            <p>Fat: {nutrients[1].amount} {nutrients[1].unit}</p>
            <p>Net Carb: {nutrients[4].amount} {nutrients[4].unit}</p> */}
            </>
    );
}

export default Recipe;