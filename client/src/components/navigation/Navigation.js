import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
        </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
);


const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="nav">
                <div className="left-nav">
                    <Link to="/">Home</Link>
                </div>

                <div className="rigth-nav">
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me <DownOutlined />
                        </a>
                    </Dropdown>
                    <Link to="/">Meal Type</Link>
                    <Link to="/">Ingredient</Link>
                    <Link to="/">Diet</Link>
                    <Link to="/">Cuisnie</Link>
                    <Link to="/">Diet</Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;