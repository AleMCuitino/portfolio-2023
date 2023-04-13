import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import resumeImg from '../../assets/cv.png';
import resume from '../../assets/cv.pdf';

function ViewerCv() {

  return (
    <React.Fragment> 
        {/* <Document file={resume} >
          <Page pageNumber={1} renderTextLayer={false} sx={{ height: '200px'}} />
        </Document>   */}
      <Box 
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center'
          }}>      
          <CardMedia
            component="img"
            image={resumeImg}
            alt="Curriculum vitae de Alejandra Morales Cuitiño"
            sx={{
              maxHeight: { xs: 350, sm: 450, md: 550, xl: 750 },
              maxWidth: { xs: 150, sm: 250, md: 350, xl: 550 }
              }}>
          </CardMedia>
          <Button 
            variant="contained" 
            href={resume} 
            download='MoralesCuitiño, Alejandra-cv'
            sx={{
              backgroundColor: '#E9417B',
              borderRadius: '25px',
              height: '3rem',
              width: '9rem',
              fontSize: '1em'
            }}> 
            Descargar
            </Button>
      </Box>
    </React.Fragment>   
  )
}

export default ViewerCv
