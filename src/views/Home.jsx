import React from 'react'
import Boarding from '../component/boarding/Boarding';
import Slider from '../component/icons/Slider';
import Navbar from "../component/navbar/Navbar";
import Projects from '../component/projects/Projects';

export default function Home() {

    return (
        <React.Fragment>
            <Navbar />
            <Boarding />
            <Slider />
            <Projects />
        </React.Fragment>
    );
}