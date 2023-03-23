import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Works from '../../data/Data.json';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Container } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Projects = () => {

  const navigate = useNavigate();

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
          width: 'auto',
          maxHeight: { xs: 200, sm: 250, md: 300, xl: 580 },
          maxWidth: { xs: 250, sm: 350, md: 550, xl: 1050 },
          mt: 5,
          mb: 5
        }}
        >
          <Button variant="text"
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}>
            <ChevronLeftIcon
              type="button"
              variant="contained"
              color="action"
              sx={{
                fontSize: 40,
                fontWeight: 600,
              }} />
          </Button>
        </Box>

        {
          Works && Works.map(work => {
            return (
              
              
              <Card
                  onClick={()=> navigate(`/proyecto/${work.id}`) }
                  elevation={0}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row', 
                    mb: 3,
                    height: 350,
                    width: 750,
                    maxHeight: { xs: 200, sm: 250, md: 350, xl: 400 },
                    maxWidth: { xs: 300, sm: 450, md: 750, xl: 1050 }
                  }}>
                  <CardActionArea key={work.id}>
                    <Typography
                      underline="none"
                      gutterBottom variant="h4"
                      component="div"
                      sx={{
                        ml: 3,
                        mb: 5,
                        fontSize: 18,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      {work.title}
                    </Typography>
                    <Container
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                      }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={work.imgUrl}
                        alt="green iguana"
                        sx={{
                          borderRadius: 2,
                          maxHeight: { xs: 150, sm: 450, md: 350, xl: 650 },
                          maxWidth: { xs: 150, sm: 450, md: 350, xl: 650 }
                        }}
                      />
                      <CardContent>
                        <Typography 
                          underline="none"
                          variant="body2" 
                          color="text.secondary"
                          sx={{
                            textAlign: 'right',
                          }}>
                            {work.subtitle}
                        </Typography>
                      </CardContent>
                    </Container>
                  </CardActionArea>
                </Card>
              
            )
          })}
      </Grid>
    </React.Fragment>
  )
}

export default Projects
