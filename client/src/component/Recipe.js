import React from 'react';

const Recipe = ({ id, title, image, nutrients }) => {

    return (
        <div style={{maxWidth: "320px", margin:"5px"}}>
            <img src={image} />
            <h4>{title}</h4>
            <p>Calrories: {nutrients[0].amount} {nutrients[0].unit}</p>
            <p>Protien: {nutrients[9].amount} {nutrients[9].unit}</p>
            <p>Fat: {nutrients[1].amount} {nutrients[1].unit}</p>
            <p>Net Carb: {nutrients[4].amount} {nutrients[4].unit}</p>
        </div>
    );
}

export default Recipe;