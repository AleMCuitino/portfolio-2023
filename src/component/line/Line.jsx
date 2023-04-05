import React from 'react';
import './Line.css';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material';


const Line = () => {
    const timeline = gsap.timeline({
        repeat: true,
        defaults: { duration: 0.1, ease: "easeInOut"}
    })

    const e1Ref = useRef()
    const e2Ref = useRef()
    const e3Ref = useRef()
    const lineRef = useRef()

    const Data = [
        {id:1, year: 2021, name: 'Diseño', ref: e1Ref},
        {id:2, year: 2022, name: 'Frontend', ref: e2Ref},
        {id:3, year: 2023, name: 'Fullstack', ref: e3Ref},
    ]

    useEffect(() => {
        timeline
        .from(e1Ref.current, {autoAlpha: 0, x: -100, duration:1})
        .from(e2Ref.current, {autoAlpha: 0, x: -100, duration:1})
        .from(e3Ref.current, {autoAlpha: 0, x: -100, duration:1})
        .to(e1Ref.current, {autoAlpha: 0, x: -100, duration:1, delay:5})
        .to(e2Ref.current, {autoAlpha: 0, x: -100, duration:1})
        .to(e3Ref.current, {autoAlpha: 0, x: -100, duration:1})
        .to(lineRef.current, {opacity: 0, duration:1})
    }, [])

    return (
        <React.Fragment>
            <Box 
                sx={{   
                    height: '100vh',
                    width: '100vw',
                    display: { xs: 'none', sm: 'none', md:'flex'},
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'flex-start'
                }}
                >
                <Box 
                    sx={{   
                        display: 'flex',
                        // flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '70%',
                    }}
                    >
                    {Data.map(el=> {
                        return (
                            <Paper 
                                elevation={0}
                                key={el.id} 
                                ref={el.ref}
                                sx={{
                                    padding: '2rem 0 1rem 0',
                                    color: '#E9417B',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                }}
                                >
                                <Typography
                                    variant='h4'>
                                    {el.year}
                                </Typography>
                                <Typography 
                                    variant='p'
                                    sx={{
                                    }}>
                                    {el.name}
                                </Typography>
                            </Paper>
                        )
                    })}
                </Box>
                <div className='line' ref={lineRef}></div>
            </Box>
        </React.Fragment>
    )
}

export default Line
