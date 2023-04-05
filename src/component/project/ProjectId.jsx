import React, { useState, useEffect } from 'react';
import './ProjectId.css'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Works from '../../data/Data.json';
import { Grid, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const useParallaxBanner =
    setScrollPosition => {
        const handleScroll = () =>
            setScrollPosition(window.pageYOffset);

        useEffect(() => {
            window
                .addEventListener(
                    "scroll",
                    handleScroll,
                    { passive: true }
                );

            return () =>
                window.removeEventListener(
                    "scroll", handleScroll);
        }, []);
    }

const ProjectId = () => {
    const [scrollPosition, setScrollPosition] =
        useState(0)

    useParallaxBanner(setScrollPosition);

    const [project, setProject] = useState({});
    const { id } = useParams()

    function getWorkById(idWork) {
        let Work = Works.filter(item => item.id == idWork)
        setProject(Work[0])
    }

    useEffect(() => {
        getWorkById(id)
    }, [])

    return (
        <React.Fragment>
            <Grid
                container
                spacing={0}
                direction="column"
                sx={{
                    minHeight: '100vh',
                    color: '#E9417B',
                }}
            >
                <section
                    className="banner"
                    image={project?.imgUrl}
                    style={{
                        backgroundImage: `url(${project?.imgUrl})`,
                        backgroundSize:
                            `${(window.outerHeight - scrollPosition) / 3
                            }%`,
                    }}
                >
                </section>
                <Box
                    sx={{
                        mx: { xs: 5, md: 10, lg: 20, xl: 25 },
                        mt: {xs: 5, sm: 10, md: 20 },
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: {xs: 'flex-start', md: 'space-between' },
                        gap: { xs: '2rem', sm: '4rem', md: '8rem', lg: '10rem' }
                    }}
                >
                    <section>
                        <Typography
                            variant='h3'
                            sx={{
                                mb: {xs: 2, sm: 3, md: 4 },
                                fontWeight: '600',
                            }}
                        >
                            {project?.title}
                        </Typography>
                        <Box
                            mb={5}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}>
                            <Link to={project?.linkRepo} target="_blank">
                                <IconButton size="large" sx={{ "&:hover": {color: "#E9417B"}}}>
                                    <GitHubIcon fontSize="medium" />
                                </IconButton>
                            </Link>
                            <Link to={project?.linkDemo} target="_blank">
                                <IconButton size="large" sx={{ "&:hover": {color: "#E9417B"}}}>
                                    <RocketLaunchIcon fontSize="medium" />
                                </IconButton>
                            </Link>
                        </Box>
                        <Typography
                            variant='p'
                            sx={{
                                mb: {xs: 2, sm: 3, md: 4 },
                                fontWeight: '300',
                                fontSize: { xs: '1em', md: '1.25em', xl: '1.5em' },
                                textAlign: 'justify'
                            }}
                        >
                            {project?.description}
                        </Typography>
                    </section>
                    <CardMedia
                        component="img"
                        image={project?.imgUrl}
                        alt="green iguana"
                        sx={{
                            maxHeight: { xs: 350, sm: 450, xl: 650 },
                            maxWidth: { xs: 350, sm: 450, xl: 650 }
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        mx: { xs: 5, md: 10, lg: 20, xl: 25 },
                        my: {xs: 5, sm: 10, md: 20 },
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'column', md: 'row'},
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: { md: '5rem', lg: '8rem' }
                    }}>
                    
                    {Array.isArray(project.tech) && (
                    <Box
                        sx={{
                            width: '50%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: { xs: '2rem', sm: '3rem', md: '5rem' },
                            }}>
                                {project.tech.map((tech, index) => (
                                <img 
                                    src={tech} 
                                    alt={index} 
                                    sx={{
                                        maxWidth: { xs: '20%', sm: '20%', md: '80%', lg: '100%'},
                                        height: 'auto'
                                        }} ></img>
                                ))}
                            </Box>
                            )}
                    <Typography
                        variant='p'
                        sx={{
                            width: '50%',
                            fontWeight: '300',
                            fontSize: { xs: '1em', md: '1.25em', xl: '1.5em' },
                            textAlign: 'justify'
                        }}
                        >
                            {project?.description2}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        mx: {xs: 5, sm: 10, md: 20 },
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}>
                    {Array.isArray(project.imgProject) && (
                        <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: { xs: '2rem', sm: '3rem', md: '5rem' },
                        }}>
                            {project.imgProject.map((imgProject, index) => (
                            <img src={imgProject} alt={index}></img>
                            ))}
                        </Box>
                    )}
                </Box>
            </Grid>
        </React.Fragment>
    )
}
export default ProjectId