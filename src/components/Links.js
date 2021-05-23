import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyle from './Styles';
import link from './image/link.png';

import {Link} from 'react-router-dom';



const Links = () => {
    const classes = useStyle();

    return (
        <Container maxWidth="lg">

            <Grid container 
            direction="column" 
            justify="flex-start" 
            alignItems="center" 
            className={classes.link1} >
                <Grid item xs={6} >
                    <Link to="/bankpayment" color="secondary" variant="inherit" style={{textDecoration: 'none'}}>
                        <Typography>
                        Pay with Bank Account
                        </Typography>
                        
                    </Link>
                </Grid>
              <Grid item xs={6}>
                  <Link to="/ussd" style={{textDecoration: 'none'}}>
                      <Typography >
                      Pay with Ussd
                      </Typography>
                  </Link>
              </Grid>
          </Grid>
           
             
          <div >
          <Button variant="outlined" color="primary" href="/" className={classes.linkbutton}>
          <img src={link} alt="" style={{marginLeft:"5px", height:"15px", width: "15px"}}/>
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
