import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function Icon({ item }) {
    return (
        <Card 
            elevation={0} 
            sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                image={item.icon}
                sx={{
                    width: "100%",
                    maxWidth: '60px',
                    maxHeight: '60px',
                    height: 'auto',
                    margin: 'auto',
                    mt: 2
                }}
            />
        </Card>
    );
}