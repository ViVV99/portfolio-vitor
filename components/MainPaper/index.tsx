'use client';

import React from 'react'
import { Paper } from '@mui/material';

export default function MainPaper({children} : React.PropsWithChildren) {
  return (
    <Paper sx={(theme) => ({
      padding: {
        xs: theme.spacing(2.5),
        sm: theme.spacing(2.8),
        md: theme.spacing(3)
      },
      background: theme.palette.background.paper,
      border: `1px solid${theme.palette.primary.main}33`,
    })}>{children}</Paper>
  )
}
