import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
                mx: { xs:10, sm: 15, md:20, xl: 30 },
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
                        fontSize: { xs: 80, sm: 100, md: 130, lg: 160, xl: 220 },
                        fontWeight: 700,
                        letterSpacing: '0.0125em',
                        textDecoration: 'none',
                        color: "#E9417B",
                        '&::after': {
                            content: '"Web"',
                            fontSize: { xs: 30, sm: 60, md: 80, lg: 120, xl: 150 },
                            color: " #F5DC4C",
                            position: 'absolute',
                            right: { xs: 50, sm: 60, md: 60, lg: 50, xl: 180 },
                            top:  { xs: 310, sm: 280, md: 320, lg: 340, xl: 600 },
                        }
                    }}
                >
                    portfolio
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        mt: { xs: 3, sm: 2, md: 3, xl: 4 },
                        display: { xs: 'flex', md: 'flex' },
                        height: 'auto',
                        color: "#E9417B",
                        width: { xs: 80, sm: 150, md: 250, lg: 300, xl: 400 },
                        fontSize: { xs: 16, sm: 20, md: 24, xl:28 },
                        fontWeight: { xs: 200, sm: 200, xl: 300 },
                        textDecoration: 'none',
                        justifyItems: 'center',
                        alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
                    }}
                >
                    ¡Hola! Soy Alejandra, desarrolladora web frontend y diseñadora integral.
                </Typography>
            </Box>
        </Box >
    )
}

export default Boarding