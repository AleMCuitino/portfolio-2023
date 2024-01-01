import React from 'react';
import Navbar from "../component/navbar/Navbar";
import ImgBoarding from '../component/img-boarding/ImgBoarding';
import { Box } from '@mui/system';
import Line from '../component/line/Line';
import { Paper, Typography } from '@mui/material';
import { Mail, GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Footer from '../component/footer/Footer'

const AboutMe = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Box
                elevation={0}
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                    alignItems: 'center',
                    justifyContent: { xs: 'flex-start', md: 'space-between' },
                }}
            >
                <ImgBoarding />
                <Line />
            </Box>
            <Box
                sx={{
                    width: { xs: '75%', md: '65%' },
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>
                <Box sx={{
                    ml: { xs: 10, sm: 15, md: 20, xl: 30 },
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography
                        variant="h3"
                        sx={{
                            mt: { xs: 3, sm: 2, md: 2, xl: 4 },
                            display: { xs: 'flex', md: 'flex' },
                            height: 'auto',
                            color: "#E9417B",
                            width: { sm: 300, md: 350, lg: 400, xl: 600 },
                            fontSize: { xs: 14, sm: 16, md: 18, lg: 20, xl: 24 },
                            fontWeight: { xs: 400, sm: 500, xl: 600 },
                            textDecoration: 'none',
                            justifyItems: 'center',
                            alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
                        }}
                    >
                        Contacto
                    </Typography>
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
                        <Link
                            component={Typography}
                            to="mailto:alemcuitino@gmail.com"
                            sx={{
                                color: "#E9417B", 
                                textDecoration: 'none', 
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            alemcuitino@gmail.com
                        </Link>
                    </Typography>
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
                        <Link component={Typography}
                            to="https://www.linkedin.com/in/alemcuitino/"
                            sx={{
                                color: "#E9417B", 
                                textDecoration: 'none', 
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}>
                            alemcuitino
                        </Link>
                    </Typography>
                </Box>

                <Typography
                    variant="p"
                    sx={{
                        color: "#E9417B",
                        fontSize: { xs: 14, sm: 16, md: 18 },
                        fontWeight: 300,
                    }}>
                    Desarrolladora Web Front-end con un perfil en diseño integral, lo que me permite tener una visión estratégica para abordar los procesos de creación y desarrollo de los proyectos.
                    Aprecio el valor del trabajo en equipo y las buenas prácticas para lograr los objetivos propuestos, bajo la guía de metodologías AGILE y SCRUM. Manejo tecnologías como HTML5, CSS3, JavaScript y React JS, además de conocimiento en PHP, MySQL, Laravel y APIs. Me motiva explorar nuevas ideas, indagar conocimientos, el trabajo creativo y el valor humano. Poseo un gran interés en la interacción de los usuarios con los productos, su experiencia y usabilidad, con un alto enfoque en los detalles; además de la capacidad de detección de necesidades y oportunidades.
                    Por otra parte, cuento con habilidades de adaptación ante los cambios, ajustar objetivos cuando existen condiciones adversas, organización y priorización de tareas en los proyectos junto al equipo.
                    Orientada a mejorar el valor de la interacción de lo usuarios.
                    Aprecio el trabajo en equipo como pilar fundamental del proceso.
                    Me encanta viajar, conocer nuevas culturas y lugares.
                    Disfruto del deporte y el cuerpo en movimiento.
                </Typography>
            </Box>
            <Footer />
        </React.Fragment>
    )
}

export default AboutMe
