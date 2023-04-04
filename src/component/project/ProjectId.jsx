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
                    mx={20}
                    mt={20}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10rem'
                    }}
                >
                    <section>
                        <Typography
                            variant='h3'
                            mb={2}
                            sx={{
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
                                fontWeight: '300',
                                fontSize: '1.25em',
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
                            maxHeight: { xs: 150, sm: 350, md: 450, xl: 650 },
                            maxWidth: { xs: 150, sm: 350, md: 450, xl: 650 }
                        }}
                    />
                </Box>
                <Box
                    mx={20}
                    my={20}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '10rem'
                    }}>
                    <Box
                        mt={10}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap:'5rem'
                        }}>
                        <img src={project?.icon1}></img>
                        <img src={project?.icon2}></img> 
                        <img src={project?.icon3}></img> 
                    </Box>
                    <Typography
                        variant='p'
                        sx={{
                            fontWeight: '300',
                            fontSize: '1.25em',
                        }}                        >
                            {project?.description2}
                    </Typography>
                </Box>
                <Box
                    mx={20}
                    mb={20}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}>
                    <CardMedia
                        component="img"
                        image={project?.imgUrl}
                        alt="green iguana"
                        sx={{
                            maxHeight: { xs: 50, sm: 150, md: 250, xl: 350 },
                            maxWidth: { xs: 50, sm: 150, md: 250, xl: 350 }
                        }}
                    />
                    <CardMedia
                        component="img"
                        image={project?.imgUrl}
                        alt="green iguana"
                        sx={{
                            maxHeight: { xs: 50, sm: 150, md: 250, xl: 350 },
                            maxWidth: { xs: 50, sm: 150, md: 250, xl: 350 }
                        }}
                    />
                    <CardMedia
                        component="img"
                        image={project?.imgUrl}
                        alt="green iguana"
                        sx={{
                            maxHeight: { xs: 50, sm: 150, md: 250, xl: 350 },
                            maxWidth: { xs: 50, sm: 150, md: 250, xl: 350 }
                        }}
                    />
                </Box>
            </Grid>
        </React.Fragment>
    )
}
export default ProjectId