import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import Works from '../../data/Data.json';
import { Box } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, Paper } from '@mui/material';

const Projects = () => {

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box sx={{
        width: '100%',
        backgroundColor: '#F7C4D3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {
          Works && Works.map(work => {
            return (
            <CardActionArea 
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: { xs: 'flex-start', md:'center' }
            }}
              >
              <Paper
                key={work.id}
                onClick={() => navigate(`/proyecto/${work.id}`)}
                elevation={0}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: {xs: 'column', sm: 'row' },
                  justifyContent: { xs: 'center', sm: 'space-evenly' },
                  alignItems: 'center',
                  gap: { xs: 2, sm: 4, md: 5, xl: 7  },
                  width: { sm: '95% ', md: '90%', lg: '80%' },
                  minHeight: '100vh',
                  maxHeight: '100vh',
                  backgroundColor: 'transparent',
                  color: '#E9417B',
                  // maxHeight: { xs: 200, sm: 250, md: 350, xl: 400 },
                  // maxWidth: { xs: 300, sm: 450, md: 750, xl: 1050 }
                }}>
                
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width:{ xs: '70%', sm: '50%', md: '40%'},
                  // maxHeight: { xs: 200, sm: 250, md: 350, xl: 400 },
                  // maxWidth: { xs: 300, sm: 450, md: 750, xl: 1050 }
                }}>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      mb: { xs: 1, sm: 2, md: 5 },
                      fontSize: { xs: 20, sm:26, md: 32, lg: 38, xl: 44},
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      textAlign: { xs: 'left', sm: 'right' }
                    }}
                  >
                    {work.title}
                  </Typography>
                  <Typography
                    underline="none"
                    variant="p"
                    sx={{
                      fontSize: { xs: 12, sm:16, md: 18, lg: 22, xl: 30},
                      fontWeight: 300,
                      textAlign: { xs: 'left', sm: 'right' }
                    }}>
                    {work.subtitle}
                  </Typography>
                </Box>
                
                <CardMedia
                  component="img"
                  image={work.imgUrl}
                  alt="green iguana"
                  sx={{
                    // display: { xs: 'none', sm: 'flex'},
                    maxHeight: { xs: 250, sm: 350, md: 450, xl: 650 },
                    maxWidth: { xs: 250, sm: 350, md: 450, xl: 650 }
                  }}
                />
              </Paper>
              </CardActionArea>
            )
          })}
      </Box>
    </React.Fragment>
  )
}

export default Projects
