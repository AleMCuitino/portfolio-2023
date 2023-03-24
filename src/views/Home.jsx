import React from 'react'
import Boarding from '../component/boarding/Boarding';
import Slider from '../component/icons/Slider';
import Navbar from "../component/navbar/Navbar";

export default function Home() {

    return (
        <React.Fragment>
            <Navbar />
            <Boarding />
            <Slider />
        </React.Fragment>
    );
}