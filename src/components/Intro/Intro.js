import React, {  Component } from 'react';
import './Intro.css';

class Intro extends Component {
    render() {
        return(
            <div className='intro container'>
                <p className='intro-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna alique. Ut enim ad minim veniam, quis nostrud exercitation ullamoco laboris nisis ut aliquip ex ea commodo consequat.
                </p>
                <img  src='./img/473d83833abd5759552a9af06d7e682abe167396.png' alt='Intro'/>
            </div>
        )
    }
}

export default Intro;