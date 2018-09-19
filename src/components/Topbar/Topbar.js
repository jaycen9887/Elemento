import React, { Component } from 'react';
import "./Topbar.css";

class Topbar extends Component{
    constructor(props){
        super(props);
        this.state={};
    };

    render() {
        return (
            <div className="top-bar container">
                <div className="top-bar-left">
                <img src='./img/logo.png' alt='Logo'/>
                </div>
                <div className="top-bar-right">
                <ul className="menu">
                    <li><a href="/">Become a Mentor</a></li>
                    <li><button type="button" className="button">BUTTON</button></li>
                </ul>
                </div>
            </div>
        );
    }
}

export default Topbar;