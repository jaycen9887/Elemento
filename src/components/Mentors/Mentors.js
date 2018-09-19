import React, {  Component } from 'react';
import $ from 'jquery';

import './Mentors.css';

class Mentors extends Component {
    constructor() {
        super();
        this.onClick = this.scrollLeft.bind(this);
        this.onClick = this.scrollRight.bind(this);
    }
    insertCourses = () => {
        let courses = [];
        for(let i = 0; i < 10; i++){

            let card = [];
            card.push(<div key={i} className='card'><img src='./img/7cc30ae6f48776eb6928b0bb132f95ed5cf7c11c.png' alt='course-img' className='course-img'/><i className="far fa-heart"></i><div className='card-section'><h4 className='card-course'>Mentor name</h4><p className='card-instructor'>Mentor area</p><div><span className='rating'><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="fas fa-star filled"></i><i className="far fa-star empty"></i></span><span className='num-reviews'>(2048) <i className="fas fa-user"></i></span></div></div></div>);
           
            courses.push(card);
        }
        return courses;
    }

    scrollLeft = () => {
        //$('.mentors.card').scrollLeft(200);
        console.log(this.attr('class'));
    }

    scrollRight = () => {
        //$('.mentors.scroll-menu').scrollRight(200);
        console.log(this);
        this.scrollRight();
        //$(this)[0].scrollRight(200);
    }


    render() {
        return(
            <div className='mentors container'>
                <p className='header'>Great Mentors</p>
                <div className='arrow-container left-top-arrow'>
                    <i onClick={this.scrollLeft} className="fas fa-angle-left fa-3x"></i>
                </div>
                <div className='arrow-container right-top-arrow'>
                    <i  onClick={this.scrollRight} className="fas fa-angle-right fa-3x"></i>
                </div>
                <div className='scroll-menu scroll-top'>
                    <p className='title'>Top courses in <span className='course-title'>Marketing</span><span><a href='/' className='see-all'>See all ></a></span></p>
                    {this.insertCourses()}
                </div>
                <div className='arrow-container left-bottom-arrow'>
                    <i onClick={this.scrollLeft} className="fas fa-angle-left fa-3x"></i>
                </div>
                <div className='arrow-container right-bottom-arrow'>
                    <i  onClick={this.scrollRight} className="fas fa-angle-right fa-3x"></i>
                </div>
                <div className='scroll-menu scroll-bottom'>
                    <p className='title'>Top courses in <span className='course-title'>Marketing</span><span><a href='/' className='see-all'>See all ></a></span></p>
                    {this.insertCourses()}
                </div>
            </div>
        )
    }
}

export default Mentors;