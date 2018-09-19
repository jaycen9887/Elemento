import React, {  Component } from 'react';
import './LandingPage.css';

import Topbar from "../../components/Topbar";
import Proposition from "../../components/Proposition";
import Intro from "../../components/Intro";
import Works from "../../components/Works";
import Benefits from "../../components/Benefits";
import Choose from "../../components/Choose";
import Mentors from "../../components/Mentors";
import Testimonials from "../../components/Testimonials";
import PriceTable from "../../components/PriceTable";
import Footer from "../../components/Footer";

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <div className='background-green'>
                    <Topbar />
                </div>
                <Proposition />
                <Intro />
                <Works />
                <Benefits /> 
                <Choose />
                <Mentors />
                <Testimonials />
                <PriceTable />
                <Footer />
            </div>
        )
    }
}

export default LandingPage;