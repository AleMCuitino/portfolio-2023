import React, { useState, useEffect } from 'react';
import './ProjectId.css'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import Works from '../../data/Data.json';
import { Grid, Typography } from '@mui/material';

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
                <Typography
                    variant="h4"
                    component="div"
                    mt={10}
                    ml={15}
                    style={{
                        fontWeight: '600',
                    }}
                >
                    {project?.title}
                </Typography>
                <Typography
                    component="p"
                    mt={5}
                    ml={15}
                    mr={15}
                >
                    {project?.description}
                </Typography>
            </Grid>
        </React.Fragment>
    )
}
export default ProjectId