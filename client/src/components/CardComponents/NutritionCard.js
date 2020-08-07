import React from 'react';

const NutritionCard = ({ nutrition }) => {
    return (
        <>
            <h4>Nutrition Facts</h4>
            <p><b>Per serving</b></p>
            {nutrition &&
                <ul>
                    <li>{nutrition.nutrients[0].amount} Calories</li>
                    <li>{nutrition.nutrients[8].amount} g Protien</li>
                    <li>{nutrition.nutrients[3].amount} g Carb</li>
                    <li>{nutrition.nutrients[1].amount} g Fat</li>
                </ul>
            }
        </>
    );
}

export default NutritionCard;