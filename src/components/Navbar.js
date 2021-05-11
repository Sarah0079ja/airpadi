import React from 'react';
import { Typography, AppBar, CssBaseline,Toolbar } from '@material-ui/core';

const Navbar = () => {
    return (
        <>
            <CssBaseline />

            <AppBar style={{background: '#152955',  position:'Relative'}}>
                <Toolbar>
                    <Typography variant="h6">
                        AirtimePadi
                    </Typography>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar
