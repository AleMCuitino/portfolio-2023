import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import Works from '../../data/Data.json';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


const ProjectId = () => {
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
            <Card sx={{
                mb: 5,
                height: 350,
                width: 750,
                maxHeight: { xs: 200, sm: 250, md: 300, xl: 380 },
                maxWidth: { xs: 250, sm: 350, md: 550, xl: 850 }
            }}>
                <CardActionArea key={project?.id}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={project?.imgUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {project?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {project?.subtitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </React.Fragment>
    )
}
export default ProjectId