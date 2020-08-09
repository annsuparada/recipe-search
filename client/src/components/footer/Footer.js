import React from 'react';
import './footer.scss';
import { LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>Create by </p>
            <div className="link">
                <p>Ann Keller</p>
                <a href="https://www.linkedin.com/in/ann-suparada/" target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined style={{ fontSize: "16px", padding: "5px", color: "white" }} />
                </a>
            </div>
        </div>
    );
}

export default Footer;