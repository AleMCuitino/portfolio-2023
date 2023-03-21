import React from 'react';
import { Button } from '@mui/material';
import Navbar from "../component/navbar/Navbar";
import ViewerCv from '../component/viewer-cv/ViewerCv';

function Cv() {

    return (
        <React.Fragment>
            <Navbar />
            <ViewerCv />
        </React.Fragment>
    )
}

export default Cv

