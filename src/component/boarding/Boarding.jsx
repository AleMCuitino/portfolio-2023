import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImgBoarding from '../img-boarding/ImgBoarding';

const Boarding = () => {
    return (
        <React.Fragment>
            <Grid
                container
                spacing={0}
                direction="column"
                flexDirection="wrap"
                alignItems="center"
                justifyContent="center"
                style={{
                    maxHeight: '100vh',
                }}>
                {/* <div style={{ width: '50%', mt: { xs: 2, sm: 2.5, md: 3, lg: 3.5, xl: 4 }, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'end' }}>
                    <Typography
                        variant="p"
                        sx={{
                            mb: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontWeight: 200,
                            fontStyle: 'italic',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                        }}
                    >
                        Diseño y Desarrollo Web Front-end
                    </Typography>
                </div> */}
                <Box
                    sx={{
                        width: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'start'
                    }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            justifyItems: 'center',
                            alignItems: 'center',
                            fontSize: 150,
                            fontWeight: 700,
                            textDecoration: 'none',
                            color: "#E9417B"
                        }}
                    >
                        portfolio
                    </Typography>
                </Box>
                <Box sx={{
                    width: '50%',
                    // ml: { xs: 2, sm: 2, md: 2 },
                    display: 'flex',
                    // flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row', xl: 'row' },
                    alignItems: 'center',
                    justifyContent: 'start',
                    // alignItems: 'flex-end'
                }}>

                    <Typography
                        variant="p"
                        sx={{
                            mt: { xs: 2, sm: 3, md: 5, lg: 5, xl: 10 },
                            // mr: { xs: 0, sm: 0, md: 2, lg: 2, xl: 3 },
                            display: { xs: 'flex', md: 'flex' },
                            height: 'auto',
                            color: "#E9417B",
                            width: 250,
                            fontSize: 16,
                            fontWeight: { xs: 10, sm: 200 },
                            // textAlign: 'right',
                            textDecoration: 'none',
                            justifyItems: 'center',
                            alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' }
                        }}
                    >
                        ¡Hola! Soy Alejandra, desarrolladora web junior frontend y diseñadora integral.
                        Por ahora, este portfolio está en proceso constructivo.
                    </Typography>
                    {/* <ImgBoarding /> */}
                </Box>
            </Grid>
        </React.Fragment >
    )
}

export default Boarding