import React from 'react';
import Navbar from "../component/navbar/Navbar";
import ImgBoarding from '../component/img-boarding/ImgBoarding';
import { Box } from '@mui/system';

const AboutMe = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Box
                elevation={0}
                sx={{
                    minHeight: '100vh',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ImgBoarding />
            </Box>

        </React.Fragment>
    )
}

export default AboutMe
