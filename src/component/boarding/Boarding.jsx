import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImgBoarding from '../img-boarding/ImgBoarding';

const Boarding = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }}>
            <Box sx={{
                mr: '10vw',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography
                    variant="h1"
                    sx={{
                        display: { xs: 'flex', md: 'flex' },
                        justifyItems: 'center',
                        alignItems: 'center',
                        fontFamily: 'Kanit, sans-serif',
                        fontSize: 150,
                        fontWeight: 700,
                        textDecoration: 'none',
                        color: "#E9417B",
                        '&::after': {
                            content: '"Web"',
                            fontSize: 80,
                            color: " #F5DC4C",
                            position: 'absolute',
                            right: 50,
                            top: 350,
                        }
                    }}
                >
                    portfolio
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        mt: { xs: 2, sm: 2, md: 3, lg: 3, xl: 10 },
                        // mr: { xs: 0, sm: 0, md: 2, lg: 2, xl: 3 },
                        display: { xs: 'flex', md: 'flex' },
                        height: 'auto',
                        color: "#E9417B",
                        width: 250,
                        fontSize: 18,
                        fontWeight: { xs: 10, sm: 300 },
                        textDecoration: 'none',
                        justifyItems: 'center',
                        alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
                    }}
                >
                    ¡Hola! Soy Alejandra, desarrolladora web frontend junior y diseñadora integral.
                </Typography>
                {/* <ImgBoarding /> */}
            </Box>
        </Box >
    )
}

export default Boarding