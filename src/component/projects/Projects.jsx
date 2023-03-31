import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import Works from '../../data/Data.json';
import { Box } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Paper } from '@mui/material';

const Projects = () => {

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#F7C4D3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {
          Works && Works.map(work => {
            return (
              <Paper
                key={work.id}
                onClick={() => navigate(`/proyecto/${work.id}`)}
                elevation={0}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  top: '100vh',
                  width: '80%',
                  minHeight: '100vh',
                  maxHeight: '100vh',
                  backgroundColor: '#F7C4D3',
                  color: '#E9417B',
                  // maxHeight: { xs: 200, sm: 250, md: 350, xl: 400 },
                  // maxWidth: { xs: 300, sm: 450, md: 750, xl: 1050 }
                }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '40%',
                  // maxHeight: { xs: 200, sm: 250, md: 350, xl: 400 },
                  // maxWidth: { xs: 300, sm: 450, md: 750, xl: 1050 }
                }}>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      mb: 5,
                      fontSize: 32,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      textAlign: 'right',
                    }}
                  >
                    {work.title}
                  </Typography>
                  <Typography
                    underline="none"
                    variant="p"
                    sx={{
                      fontSize: 20,
                      fontWeight: 300,
                      textAlign: 'right',
                    }}>
                    {work.subtitle}
                  </Typography>
                </Box>
                <CardMedia
                  component="img"
                  image={work.imgUrl}
                  alt="green iguana"
                  sx={{
                    maxHeight: { xs: 150, sm: 350, md: 450, xl: 650 },
                    maxWidth: { xs: 150, sm: 350, md: 450, xl: 650 }
                  }}
                />
              </Paper>
            )
          })}
      </Box>
    </React.Fragment>
  )
}

export default Projects
