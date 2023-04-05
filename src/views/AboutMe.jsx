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
                    justifyContent: { xs: 'flex-start', md: 'space-between' },
                }}
            >
                <ImgBoarding />
                <Line />
            </Box>
            <Box 
                sx={{
                    mx: { xs: 5, md: 10, lg: 20, xl: 25 },
                    mb: { xs: 5, md: 10, lg: 20, xl: 25 },
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
            <Box 
                sx={{
                    my: { xs: 3, md: 5, lg: 5, xl: 15 },
                    mx: { xs: 5, md: 10, lg: 20, xl: 15 },
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
