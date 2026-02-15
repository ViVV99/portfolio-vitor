import React from 'react'
import { Box, Fade, Grid } from '@mui/material'

function MainHeader({ children } : React.PropsWithChildren) {
    return (
        <Grid container justifyContent="center" alignItems="center" component='header' sx={{
            height: {
                xs: '300px',
                md: '500px',
                lg: '800px',
            },
            position: 'relative',
            userSelect: 'none',
        }}>
            <ul className="bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Fade in timeout={2000}>
            {children as React.JSX.Element}
            </Fade>
        </Grid>
    )
}

export default MainHeader;