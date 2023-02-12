import React from 'react'
import Boarding from '../component/boarding/Boarding';
import Navbar from "../component/navbar/Navbar";
// import Footer from "../../components/footer/Footer";
// import ShowElement from '../../views/crud/ShowElement';
// import Boarding from "../../components/boarding/Boarding";
// import Box from '@mui/material/Box';

export default function Home() {

    return (
        <React.Fragment>
            <Navbar />
            <Boarding />
        </React.Fragment>
    );
}