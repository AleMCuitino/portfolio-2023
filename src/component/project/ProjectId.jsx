import React, { useState, useEffect } from 'react';
import './ProjectId.css'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import Works from '../../data/Data.json';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

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
                    >
                    <Typography
                        variant='h3'
                        mt={20}
                        sx={{
                            fontWeight: '600',
                        }}
                    >
                        {project?.title}
                    </Typography>
                    <Typography
                        variant='p'
                        sx={{
                            fontWeight: '300',
                            fontSize: '1.25em',
                        }}
                    > 
                        {project?.description}
                    </Typography>
                </Box>
            </Grid>
        </React.Fragment>
    )
}
export default ProjectId