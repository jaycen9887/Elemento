import React, {  Component } from 'react';
import './PriceTable.css';

class PriceTable extends Component {
    render() {
        return(
            <div className='priceTable container'>
                <p className='header'>Select your plan</p>
                <div className='bar'>
                    <button type='button' className='button left'></button>
                    <button type='button' className='button right'></button>
                </div>
                <div className='grid-x'>
                    <div className='cell small-12 medium-12 large-4 basic'>
                        <p className='type'>Basic Plan</p>
                        <img src='./img/basic.png' alt=''/>
                        <div className='group'>
                            <p>Lake Brett</p>
                            <p>West Amiya</p>
                            <p>Gabrielleborough</p>
                            <p>Port Van</p>
                        </div>
                        <p className='price'>$10</p>
                        <p className='monthly'> per month</p>
                        <button type='button' className='button plan-button'>BUTTON</button>
                    </div>
                    <div className='cell small-12 medium-12 large-4 advanced'>
                        <p className='type'>Advanced Plan</p>
                        <img src='./img/advanced.png' alt=''/>
                        <div className='group'>
                            <p>Lake Brett</p>
                            <p>West Amiya</p>
                            <p>Gabrielleborough</p>
                            <p>Port Van</p>
                        </div>
                        <p className='price'>$20</p>
                        <p className='monthly'> per month</p>
                        <button type='button' className='button plan-button'>BUTTON</button>
                    </div>
                    <div className='cell small-12 medium-12 large-4 deluxe'>
                        <p className='type'>Deluxe Plan</p>
                        <img src='./img/deluxe.png' alt=''/>
                        <div className='group'>
                            <p>Lake Brett</p>
                            <p>West Amiya</p>
                            <p>Gabrielleborough</p>
                            <p>Port Van</p>
                        </div>
                        <p className='price'>$30</p>
                        <p className='monthly'> per month</p>
                        <button type='button' className='button plan-button'>BUTTON</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PriceTable;