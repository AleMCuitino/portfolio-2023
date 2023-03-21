import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import resume from '../../assets/cv.pdf';

function ViewerCv() {

  return (
    <React.Fragment>
      <Box sx={{
                height: '150px',
                display: 'flex',
                justifyContent: 'center'
                }}>
        <Document file={resume} >
          <Page pageNumber={1} renderTextLayer={false} />
        </Document>
      </Box>
    </React.Fragment>
  )
}

export default ViewerCv
