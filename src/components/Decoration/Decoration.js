import React, {  Component } from 'react';
import './Decoration.css';

class Decoration extends Component {
    render() {
        return(
            <div className='decoration'>
                <div className='grid-x grid-margin-x'>
                    <div className='cell medium-1 large-2'>
                        <div className='left'></div>
                    </div>
                    <div className='cell medium-offset-10 large-offset-8'>
                        <div className='right'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Decoration;