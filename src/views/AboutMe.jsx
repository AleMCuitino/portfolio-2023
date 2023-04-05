import React from 'react';
import Navbar from "../component/navbar/Navbar";
import ImgBoarding from '../component/img-boarding/ImgBoarding';
import { Box } from '@mui/system';
import Line from '../component/line/Line';
import { Paper, Typography } from '@mui/material';
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
                    flexDirection: { xs: 'column', sm:'row', md: 'row'},
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <ImgBoarding />
                <Line />
            </Box>
            <Box 
                sx={{
                    mx: { xs: 8, md: 10, lg: 20, xl: 25 },
                    width: { xs: '75%', md:'35%'},
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>
                
                <Typography
                    variant="p"
                    sx={{
                        color: "#E9417B",
                        fontSize: { xs: 14, sm: 16, md: 18 },
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
                    my: { xs: 3, md: 5, lg: 5, xl: 15 },
                    mx: { xs: 8, md: 10, lg: 20, xl: 15 },
                    width: { xs: '75%', md:'35%'},
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-between',
                    }}
                    >
                <Link 
                    to='https://github.com/AleMCuitino/portfolio-2023'
                    target="_blank"
                    >     
                    <GitHub sx={{
                        color: "#E9417B",
                        fontSize: { xs: 30, sm: 50, md: 50 },
                    }} />
                </Link>   
                <Link 
                    to='https://github.com/AleMCuitino/portfolio-2023'
                    target="_blank"
                    >
                    <LinkedIn
                        sx={{
                        color: "#E9417B",
                        fontSize: { xs: 30, sm: 50, md: 50 },
                        }}/>
                </Link>
                <Mail sx={{
                    color: "#E9417B",
                    fontSize: { xs: 30, sm: 50, md: 50 },
                }} />
            </Box>  
        </React.Fragment>
    )
}

export default AboutMe
