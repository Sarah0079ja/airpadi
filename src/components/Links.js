import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyle from './Styles';
// import Link from '@material-ui/icons/link';
import {Link} from 'react-router-dom';



const Links = () => {
    const classes = useStyle();

    return (
        <Container maxWidth="lg">

            <div container spacing={0.5} className={classes.link1} >
                <div item xs={6} >
                    <Link to="/bankpayment" color="secondary" variant="inherit">
                        Pay with Bank Account
                    </Link>
                </div>
              <div item xs={6}>
                  <Link to="/ussd">Pay with Ussd</Link>
              </div>
          </div>
           
             
          <div >
          <Button variant="outlined" color="primary" href="/" className={classes.linkbutton}>
          {/* InputProps={{startAdornment:( <InputAdornment position="start"><Link /></InputAdornment>),}} */}
              Link my bank account
          </Button>
          </div>
          
        
        <Typography variant="h5" gutterBottom className={classes.sec1}>
             OR
          </Typography> 
          <Typography variant="h5" gutterBottom className={classes.sec}>
                Enter your details below
          </Typography>
        </Container>
    )
}

export default Links
