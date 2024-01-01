import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import portfolio from '../../assets/portfolio.svg'

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
                mx: { xs: 10, sm: 15, md: 20, xl: 30 },
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* <Typography
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
                </Typography> */}
                <CardMedia
                    component="img"
                    image={portfolio}
                    alt="portfolio web"
                    sx={{
                        maxHeight: { xs: 350, sm: 450, md: 550, lg: 650, xl: 850 },
                        maxWidth: { xs: 350, sm: 450, md: 550, lg: 650, xl: 850 }
                    }}
                />
                <Typography
                    variant="p"
                    sx={{
                        mt: { xs: 3, sm: 2, md: 2, xl: 4 },
                        display: { xs: 'flex', md: 'flex' },
                        height: 'auto',
                        color: "#E9417B",
                        width: { sm: 300, md: 350, lg: 400, xl: 600 },
                        fontSize: { xs: 14, sm: 16, md: 18, lg: 20, xl: 24 },
                        fontWeight: { xs: 200, sm: 200, xl: 300 },
                        textDecoration: 'none',
                        justifyItems: 'center',
                        alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
                    }}
                >
                    ¡Hola! Soy Alejandra, diseñadora UX/UI y desarrolladora web frontend. {'\n'}  Bienvenidos a mi portfolio.{'\n'}
                    {/* 🚧 en construcción 🚧 */}
                </Typography>
            </Box>
        </Box >
    )
}

export default Boarding