import React, { useState } from 'react'
import ale from '../../assets/images/Ale1grey.png';
import aleHover from '../../assets/images/Ale1.png';
import Box from '@mui/material/Box';

function ImgBoarding() {
    const [over, setOver] = useState(false);
    return (
        <div
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
        >
            <Box
                        component="img"
                        sx={{
                            height: 350,
                            width: 350,
                            maxHeight: { xs: 150, sm: 180, md: 250, xl:450 },
                            maxWidth: { xs: 150, sm: 180, md: 250, xl:450 },
                            display: { xs: 'flex', md: 'flex' },
                        }}
                        alt="Alejandra Morales Cuitiño."
                        src={over ? aleHover : ale}
                    />
        </div>
    )
}

export default ImgBoarding;