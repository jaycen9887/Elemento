import React, { Component } from 'react';
import "./Works.css";

class Works extends Component{
    constructor(props){
        super(props);
        this.state={};
    };

    render() {
        return (
            <div className="works container">
                <h2 className='header'>How it works</h2>
                <div className='grid-x steps'>
                    <div className=' cell small-12 medium-4 large-4 steps'>
                        <div className='circle'></div>
                        <div>
                            <div className='circle-line'></div><div className='left-line'></div>
                        </div>
                        <div className='title'>
                            <p>Step one</p>
                        </div>
                        <div className='description'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt.</p>
                        </div>
                    </div>
                    <div className='cell small-12 medium-4 large-4 steps'>
                        <div className='circle'></div>
                        <div>
                            <div className='circle-line'></div><div className='center-line'></div>
                        </div>
                        <div className='title'>
                            <p>Step two</p>
                        </div>
                        <div className='description'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt.</p>
                        </div>
                    </div>
                    <div className='cell small-12 medium-4 large-4 steps'>
                        <div className='circle'></div>
                        <div>
                            <div className='circle-line'></div><div className='right-line'></div>
                        </div>
                        <div className='title'>
                            <p>Step three</p>
                        </div>
                        <div className='description'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
                <div className='link'>
                    <a href='/'><i className="far fa-play-circle fa-lg"></i> Watch how it works!</a>
                </div>
            </div>
        );
    }
}

export default Works;