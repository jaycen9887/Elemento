import React, {  Component } from 'react';
import './Benefits.css';

class Benefits extends Component {
    render() {
        return(
            <div className='benefits'>
                <div className='main container light-green'>
                    <p className='header'>Benefits</p>
                    <p className='main-description'>Lorem ipsum dolor sit amet consectetur adpisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    <div className='grid-x '>
                        <div className=' cell small-12 medium-6 large-3'>
                            <div className='icons'>
                                <img src='./img/benefits-icon1.png' alt=' Best Teachers'/>
                            </div>
                            <div className='title'>
                                <p>The Best Teachers</p>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className=' cell small-12 medium-6 large-3'>
                            <div className='icons'>
                                <img src='./img/benefits-icon2.png' alt='Huge Class Library' />
                            </div>
                            <div className='title'>
                                <p>Huge Class Library</p>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className=' cell small-12 medium-6 large-3'>
                            <div className='icons'>
                                <img src='./img/benefits-icon3.png' alt='Great Community'/>
                            </div>
                            <div className='title'>
                                <p>Great Community</p>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className=' cell small-12 medium-6 large-3'>
                            <div className='icons'>
                                <img src='./img/benefits-icon4.png' alt='Really Affordable'/>
                            </div>
                            <div className='title'>
                                <p>Really Affordable</p>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='decoration light-green'>
                    <div className='grid-x grid-margin-x'>
                        <div className='cell medium-1 large-2'>
                            <div className='left'></div>
                        </div>
                        <div className='cell medium-offset-10 large-offset-8'>
                            <div className='right'></div>
                        </div>
                    </div>
                </div>


                <div className='grid-x container light-green'>
                    <div className='cell small-12 medium-6 large-4'>
                        <div className='right-content'>
                            <div className='title'>
                                Always be learning  <br /> on the device you prefer
                            </div>
                            <div className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <ol className='fa-ul'>
                                <li><span className='fa-li'><i className="far fa-check-circle"></i></span>Take classes from anywhere</li>
                                <li><span className='fa-li'><i className="far fa-check-circle"></i></span>Available when you need them</li>
                                <li><span className='fa-li'><i className="far fa-check-circle"></i></span>Watch on demand</li>
                            </ol>
                        </div>
                    </div>
                    <div className='medium-6 large-4'>
                        <div className='girl-background'>
                            <img className='girl-shadow' src='./img/a4403009019852132f35aa05fa4751eb82c96f8a.png' alt='Girl Shadow'/>
                        </div>
                        <div className='placeholder-img'>
                            <img className='placeholder-759' src='./img/a64250d253c23b5b03a1382a2317ca82dfe218c1.png'  alt='placeholder'/>
                        </div>
                        <div className='icon-img'>
                            <img className='lightning' src='./img/lightening icon.png' alt='lightning' />
                        </div>
                        <div className='cap-img'>
                            <img className='cap' src='./img/cap.png' alt='cap' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Benefits;