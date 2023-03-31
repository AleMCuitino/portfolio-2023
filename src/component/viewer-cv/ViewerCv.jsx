import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import resume from '../../assets/cv.pdf';

function ViewerCv() {

  return (
    <React.Fragment> 
      <Box 
        mt={10} 
        sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
        <Document file={resume} >
          <Page pageNumber={1} renderTextLayer={false} sx={{ height: '200px'}} />
        </Document>  
      </Box>
      <Box 
        m={5} 
        sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
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
