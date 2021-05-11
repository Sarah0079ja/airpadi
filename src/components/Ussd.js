import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Nolink from './Nolink';
import useStyle from './Styles';


const Ussd = () => {
    const classes = useStyle();
    return (
        
        <>
        
            <Container maxWidth="sm" className = {classes.ussd} >
                <Typography variant="h5" align="center" gutterBottom>
                  Buying airtime has never been this easy!
                </Typography>
            </Container>  
            <Nolink /> 
        </>
    )
}

export default Ussd
