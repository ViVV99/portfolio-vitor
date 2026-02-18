import React from 'react'
import { Typography } from '@mui/material'

export default function Text({children} : React.PropsWithChildren) {
  return (
    <Typography color='textPrimary' variant='body1'>
        {children}
    </Typography>
  )
}
