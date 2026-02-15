"use client";

import React from 'react';
import { Card, CardContent, Chip, Box, Typography, AppBar, Toolbar, List, Button, Theme } from '@mui/material';

export default function MainNavBar() {
  return (
    <>
    <AppBar component="nav" sx={(theme : Theme) => ({
      background: theme.palette.background.paper,
    })}>
        <Toolbar>
            <List sx={{ alignSelf: 'center', float: 'right'}}>
                <Button color='secondary' variant="outlined">Contact Me!</Button>
            </List>
        </Toolbar>
    </AppBar>

    </>
  );
}