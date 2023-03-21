import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Works from '../../data/Data.json';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Projects = () => {

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
                    minHeight: '100vh',
                }}
            >
                
                <Button variant="text"
                        sx={{ 
                            display: "flex",
                            alignItems: "start",
                            justifyContent: "start", }}>
                        <ChevronLeftIcon 
                            type="button" 
                            variant="contained" 
                            color="action" 
                            sx={{ 
                                fontSize: 40,
                                fontWeight: 600,
                                }}  />
                </Button>

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: 750,
                    maxHeight: { xs: 200, sm: 250, md: 300, xl: 380 },
                    maxWidth: { xs: 250, sm: 350, md: 550, xl: 850 },
                    mt: 5,
                    mb: 5
                }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            fontSize: 22,
                            fontWeight: 400,
                            textTransform: 'uppercase',
                        }}
                    >
                        Proyectos
                    </Typography>
                </Box>

                {
                    Works && Works.map(work => {
                        return (
                            <Card sx={{
                                mb: 5,
                                height: 350,
                                width: 750,
                                maxHeight: { xs: 200, sm: 250, md: 300, xl: 380 },
                                maxWidth: { xs: 250, sm: 350, md: 550, xl: 850 }
                            }}>
                                <CardActionArea key={work.id}>
                                    <Link to={`/proyecto/${work.id}`}>
                                        <CardMedia
                                        component="img"
                                        height="140"
                                        image={work.imgUrl}
                                        alt="green iguana"
                                    /></Link>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {work.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {work.subtitle}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })}
            </Grid>
        </React.Fragment>
    )
}

export default Projects
