import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction icon={<GitHub sx={{
                        color: "#E9417B",
                        fontSize: { xs: 30, sm: 50, md: 50 },
                    }} />} />

                <BottomNavigationAction icon={<LinkedIn
                        sx={{
                        color: "#E9417B",
                        fontSize: { xs: 30, sm: 50, md: 50 },
                        }} />} />
            </BottomNavigation>
        </Box>
    );
}