import React, {  Component } from 'react';
import './Testimonials.css';

class Testimonials extends Component {
    render() {
        return(
            <div className='testimonials container'>
                <div className='quote'></div>
                <div className='header'>Testimonials</div>
                <div className='grid-x'>
                    <div className='cell small-12 medium-6 large-6 testimonal-info'>
                        <p className='name'>Ann Marie</p>
                        <p className='course'>UI Designer - YOYO ACADEMY</p>
                        <p className='testimonial-snippet'>
                            ...Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do eisusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad might.
                        </p>
                        <div className='left-arrow'></div>
                        <div className='right-arrow'></div>
                    </div>
                    <div className='cell small-12 medium-6 large-6 videos'>
                        <div className='grid-x labelrow video-1'>
                            <div className='cell small-6'>
                                <div className='grid-x labelrow'>
                                    <div className='cell small-12'>
                                        <img className='temp-icon' src='./img/e-temp.png' alt='E Temp'/>
                                        <span className='student-name'>Ann Marie</span><br />
                                        <span className='course-name'>UI Designer</span>
                                    </div>
                                </div>
                                <img src='./img/dc6ec1a52636a3cd0fc53e878dbd561e54c30e85.png' alt='Video Placeholder' />
                            </div>
                        </div>
                        
                        <div className='video-2'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials;