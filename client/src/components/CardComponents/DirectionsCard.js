import React from 'react';
import { List } from 'antd';

const DirectionsCard = ({directions}) => {
    return (
        <>
            <h4>Directions</h4>
            <List
                style={{ maxWidth: 556 }}
                itemLayout="horizontal"
                dataSource={directions && directions[0].steps}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={`Step ${item.number}`}
                            description={item.step}
                        />
                    </List.Item>
                )}
            />
        </>
    );
}

export default DirectionsCard;