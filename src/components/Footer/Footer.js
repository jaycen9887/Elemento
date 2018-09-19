import React, {  Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <div className='footer container'>
                <div className='grid-x'>
                    <div className='cell small-6'>
                        <p className='logo'>ELEMENTO</p>
                        <p className='header'>Elemento is the best template library for your project</p>
                        <p className='header bottom-header'>It allow you to adapt and accomplish great results with a few clicks</p>
                        <div className='grid-x platforms'>
                            <div className='cell small-4 platform-right'><i class="fab fa-android fa-2x gray"></i></div>
                            <div className='cell small-4'><i class="fab fa-apple fa-2x white"></i></div>
                            <div className='cell small-4 platform-left'><i class="fab fa-windows fa-2x white"></i></div>
                        </div>
                    </div>
                    <div className='cell small-6 right-side'>
                        <div className='grid-x'>
                            <div className='cell small-4'>
                                <p className='title'>PRODUCT</p>
                                <ul>
                                    <li><a href='/'>How it works</a></li>
                                    <li><a href='/'>Benefits</a></li>
                                    <li><a href='/'>Features</a></li>
                                </ul>
                            </div>
                            <div className='cell small-4'>
                            <p className='title'>SUPPORT</p>
                                <ul>
                                    <li><a href='/'>Blog</a></li>
                                    <li><a href='/'>Help</a></li>
                                    <li><a href='/'>FAQ</a></li>
                                </ul>
                            </div>
                            <div className='cell small-4'>
                            <p className='title'>CONTACT</p>
                                <ul>
                                    <li><a href='/'>info@elemento.com</a></li>
                                    <li><a href='/'>809-347-1289</a></li>
                                    <li className='social-media'><button className='selected' href='/'><i class="fab fa-facebook-f"></i></button><button href='/'><i class="fab fa-instagram"></i></button><button href='/'><i class="fab fa-twitter"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;