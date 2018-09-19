import React, {  Component } from 'react';
import './Choose.css';

class Choose extends Component {
    render() {
        return(
            <div className='choose container'>
                <p className='header'>Why take classes on elemento?</p>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <div className='grid-x elements'>
                    <div className='cell small-12 medium-6 large-4 element-one'>
                        <p className='num'>100+</p>
                        <p className='element-label'>Teacher experts</p>
                    </div>
                    <div className='cell small-12 medium-6 large-4  element-two'>
                        <p className='num'>1000+</p>
                        <p className='element-label'>Active users</p>
                    </div>
                    <div className='cell small-12 medium-6 large-4 element-three'>
                        <p className='num'>96%</p>
                        <p className='element-label'>Self-improvement</p>
                    </div>
                </div>
                <div className='grid-x'>
                    <div className='cell small-5 medium-5 large-4'>
                        <img src='./img/left-map.png' className='left-map' alt='left-map'/>
                    </div>
                    <div className='cell small-5 medium-5 large-4'>
                        <img src='./img/right-map.png' className='right-map' alt='right-map'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Choose;