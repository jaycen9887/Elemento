import React, { Component } from 'react';
import "./Proposition.css";

class Proposition extends Component{
    constructor(props){
        super(props);
        this.state={};
    };

    render() {
        return (
            <div className="proposition">
                <div className='landing-page container'>
                    <h1>Find Your Personal Mentor</h1>
                    <p>Get direct access to the best instructors in each field, lorem ipsum dolor sit amet consecteture adipisicing elit</p>
                    <button type='button' className='button'>START SEARCHING</button>
                </div>
                <div className='ipad-image'>
                    <img src='./img/473d83833abd5759552a9af06d7e682abe167395.png' alt='iPad'/>
                </div>
            </div>
        );
    }
}

export default Proposition;