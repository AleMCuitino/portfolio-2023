import React from 'react';
import Navbar from "../component/navbar/Navbar";
import ImgBoarding from '../component/img-boarding/ImgBoarding';
import { Box } from '@mui/system';
import Line from '../component/line/Line';
import { Paper, Typography } from '@mui/material';

const AboutMe = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Box
                elevation={0}
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                <ImgBoarding />
                <Line />
            </Box>
            <Box 
                sx={{
                    ml: '12vw',
                    width: '40vw',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-evenly',
                }}>
                <Typography
                    variant="p"
                    sx={{
                        color: "#E9417B",
                        fontSize: { xs: 12, sm: 14, md: 18 },
                        fontWeight: 300,
                    }}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley
                    Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley.
                    Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley.
                    Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley.
                </Typography>
            </Box>

        </React.Fragment>
    )
}

export default AboutMe
