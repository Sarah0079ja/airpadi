import React from 'react';
import { Typography, AppBar, CssBaseline,Toolbar } from '@material-ui/core';
import logo from './image/logo.png';
// import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <CssBaseline />

            <AppBar style={{background: '#152955',  position:'Relative'}}>
                <Toolbar>
                  
                   <img src={logo} alt="" style={{maxWidth: "100%",displayInline:"flex" }}/>
                  
                   
                   <Typography variant="h6">
                   Airtimepadi  
                    </Typography>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar
