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
                            mx: { xs: 5, md: 10, lg: 20, xl: 25 },
                            my: { xs: 3, md: 5, lg: 5, xl: 15 },
                            height: '100%',
                            width: 'auto',
                            maxHeight: { xs:400, sm: 350, md: 400, lg: 480, xl:650 },
                            display: { xs: 'flex', md: 'flex' },
                        }}
                        alt="Alejandra Morales Cuitiño."
                        src={over ? aleHover : ale}
                    />
        </div>
    )
}

export default ImgBoarding;