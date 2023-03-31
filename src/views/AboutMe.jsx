import React from 'react';
import Navbar from "../component/navbar/Navbar";
import ImgBoarding from '../component/img-boarding/ImgBoarding';
import { Box } from '@mui/system';
import Line from '../component/line/Line';
import { Typography } from '@mui/material';
import { Mail, GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
                    width: '30vw',
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
                        textAlign: 'justify'
                    }}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley
                    Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley.
                    Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley.
                    Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley.
                </Typography>
            </Box>
            <Box 
                sx={{
                    my: '10vh',
                    ml: '12vw',
                    width: '30vw',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-between',
                    }}
                    >
                <Link 
                    to='https://github.com/AleMCuitino/portfolio-2023'
                    >     
                    <GitHub sx={{
                        color: "#E9417B",
                        fontSize: { xs: 50, sm: 50, md: 50 },
                    }} />
                </Link>   
                <Link 
                    to='https://github.com/AleMCuitino/portfolio-2023'
                    >
                    <LinkedIn
                        sx={{
                        color: "#E9417B",
                        fontSize: { xs: 50, sm: 50, md: 50 },
                        }}/>
                </Link>
                <Mail sx={{
                    color: "#E9417B",
                    fontSize: { xs: 50, sm: 50, md: 50 },
                }} />
            </Box>  
        </React.Fragment>
    )
}

export default AboutMe
