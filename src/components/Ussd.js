import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Formussd from './Formussd';
import useStyle from './Styles';


const Ussd = () => {
    const classes = useStyle();
    return (
        
        <>
        
            <Container maxWidth="sm" className = {classes.ussd} >
                {/* <Typography variant="h5" align="center" gutterBottom>
                  Buying airtime has never been this easy!
                </Typography> */}
            </Container>  
            <Formussd /> 
        </>
    )
}

export default Ussd
