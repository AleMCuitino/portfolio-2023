import React from 'react';
import Works from '../../data/Data.json';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import img1 from '../../assets/img-proj/duck-or-goose.png';

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
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: 750,
                    maxHeight: { xs: 200, sm: 250, md: 300, xl: 380 },
                    maxWidth: { xs: 250, sm: 350, md: 550, xl: 850 },
                    mt: 10,
                    mb: 5
                }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            fontSize: 18,
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
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={img1}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {work.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {work.subtitle}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <AddCircleIcon size="small" color="primary"></AddCircleIcon>
                                </CardActions>
                            </Card>
                        )
                    })}
            </Grid>
        </React.Fragment>
    )
}

export default Projects
