import React,  {Component} from 'react';
import party from './image/party.png';
import axios from 'axios';
import { TextField,Paper, Container, Typography} from '@material-ui/core';

//  import InputAdornment from '@material-ui/core/';

import {withStyles} from '@material-ui/core/styles';
import Links from './Links';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: "80%",
           
            margin: theme.spacing(0.5), 
            font: 'Avenir',
               
            
        }
    },
    button: {
        margin: theme.spacing(1),
        width: "60%",
    },
    
    ussd: {
        marginTop: "50px",
        align: "center",
        fontWeight: "900px",
     },
    form: {
        align: "center",
        padding: "5px",
        marginTop: "10px",
        // margin: "20px auto"
    },
    root1: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
            width: '80%',
            
        
          },
    },

})
class B extends Component {
    state = {
        others: [],
        step: 1
     }

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    componentDidMount() {
       
        axios.get('http://localhost:8000/b/8')
        .then(res => {
            const result = res.data
            this.setState({result})
        })
     };
      
       
    render (){
    const {value, handleChange} = this.props;
    const { classes } = this.props;
    // const classes = useStyle();
    return (
        <div>
            <Container>
           
              
           <div maxWidth="sm" className = {classes.ussd} >
               <Typography variant="h5" align="center" gutterBottom>
               Buying airtime has never been this easy!
               <img src={party} alt="" style={{marginLeft:"5px", height:"20px", width: "20px"}}/>
               </Typography>
               
                    {/* <Success airtimeAmount={airtimeAmount} phoneNo={other.phoneNo} />
             
                    <Completetrans airtimeAmount={airtimeAmount} phoneNo={other.phoneNo} bank={other.bank}/> */}
               
              
           </div> 

       
         <Paper>
       
           <Links />
            <form className = {classes.root} >
              
               <div align="center">
                  <div item xs={6} className = {classes.form}>
                      <TextField
                       type="text"
                       variant="outlined"
                       label="Airtime amount"
                       id="airtimeAmount"
                       onChange={handleChange('airtimeAmount')}
                       name="airtimeAmount"
                       defaultValue = {value.airtimeAmount}
                       helperText= "Fill in airtime"
                       
                  
                      />
                      
                      
              <div className="root1" noValidate autoComplete="off">
                  {this.state.others.map(other => 
                     <TextField
                     id="bank"
                     name="bank"
                     value={value.bank} 
                     helperText="Select your bank"
                     variant="outlined" 
                     /> 
                     )}
                      
              </div>
                
                 
               <div>    
               {this.state.others.map(other =>
                     <TextField variant="outlined" 
                     id="phoneNo"
                     value={value.phoneNo} 
                     helperText="Enter Phone number"
                    name="phoneNo" 
                    />
                     )}
              </div> 
                 

                      <Typography variant="h6" align="center" gutterBottom> 
                              <Button variant="contained" size="large" color="primary" className={classes.button}
                                 >
                                  Buy Airtime
                              </Button> 
                      </Typography>
                                 
                  </div>
              </div>
            
           </form>   
  
   </Paper>
    
</Container>
        </div>
      
       
    )
  }
}

export default withStyles(styles) (B);