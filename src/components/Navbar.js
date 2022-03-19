import React from 'react';
import logo from '../images/react-logo.png';

export default function Header() {
    return (
        <nav>
            <img src={logo} className="nav--icon"/>
            <h3 className="nav--logo_text">ReacstFacts</h3>
            <h4 className="nav--logo_title">React Course - Project 1</h4>
        </nav>
    );
}
