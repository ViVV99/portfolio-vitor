"use client";

import React from 'react';
import { AppBar, Toolbar, List, Button, Theme } from '@mui/material';

export default function MainNavBar() {
  return (
    <>
    <AppBar component="nav" sx={(theme : Theme) => ({
      background: theme.palette.background.paper,
    })}>
        <Toolbar>
            <List sx={{ alignSelf: 'center', float: 'right'}}>
                <Button color='secondary' variant="outlined" component="a" href="#contact-section">Contact Me!</Button>
            </List>
        </Toolbar>
    </AppBar>

    </>
  );
}