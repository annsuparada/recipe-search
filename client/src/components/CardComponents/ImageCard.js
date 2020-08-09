import React from 'react';
import { Card } from 'antd';

const ImageCard = (props) => {
    console.log('props', props)
    return (
        <>
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.title} />
            <Card size="small" style={{ maxWidth: 556 }}>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <h6><b>Prep:</b> {props.prep} mins</h6>
                    <h6><b>Cook:</b> {props.cook} mins</h6>
                    <h6><b>Total:</b> {props.total} mins</h6>
                    <h6><b>Serving:</b> {props.servings}</h6>
                </div>
            </Card>
        </>
    );
}

export default ImageCard;