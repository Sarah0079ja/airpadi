import React,{useState} from 'react';
// import {useHistory} from 'react-router-dom';


import { TextField,Paper, Container, Typography} from '@material-ui/core';
// import Pen from '@material-ui/icons/pen';

// import InputAdornment from '@material-ui/core/Pen';

import MenuItem from '@material-ui/core/MenuItem';

import useStyle from './Styles';
import Links from './Links';
import Button from '@material-ui/core/Button';

import banks from './banks.json'

const Formussd = () => {

    const handleChange = (e) => {
     setBank(e.target.value);
    };

    const classes = useStyle();
    const [airtime, setAirtime] = useState('')
    const [airtimeError, setAirtimeError] = useState({});

    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState({});

    const [bank, setBank] = useState('');
    // const [bankError, setBankError] = useState({});


    async function onSubmit (e) {
        e.preventDefault();
        const isValid = formValidation();
        
         let item= {airtime, phone, bank}
        //    console.log(item);

        let result = await fetch('', {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        result = result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        // history.push("/completetrans")

    }

    const formValidation = () => {
        const airtimeError = {}
        const phoneError = {};
        const bankError = {};
        let isValid = true;

       //phone validation 
      if (!phone) {
        isValid = false;
        phoneError.phoneVal = "Please enter your phone number.";
      }
  
      if (phone !== "undefined") {
          
        const pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(phone)) {
          isValid = false;

          phoneError.phoneVal1 = "Please enter only number.";

        }else if(phone.length !== 11){
          isValid = false;
          phoneError.phoneval2 = "Please enter valid phone number.";
        }
      }

      //airtime validation
      if (!airtime) {
        isValid = false;
        airtimeError.airtimeVal = "Please enter your phone number.";
      }
  
      if (airtime !== "undefined") {
          
        const pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(airtime)) {
          isValid = false;

          airtime.airtimeVal1 = "Please enter only number.";
        }else if(airtime.length < 3){
          isValid = false;
          phoneError.airtimeval2 = "Please enter valid phone number.";
        }
      }

      //bank validation
      if (bank === '') {
        isValid = false;
        bankError.bankVal = "Please enter your phone number.";
      }

      setAirtimeError(airtimeError);
      setPhoneError(phoneError);
    //   setbankError(bankError);

      return isValid;
      
    }

   
    return (
      
        <Container maxWidth="sm">

            <Container maxWidth="sm" className = {classes.ussd} >
                <Typography variant="h5" align="center" gutterBottom>
                  Buying airtime has never been this easy!
                </Typography>
            </Container> 
        <Paper>
            
              <Links />
             <form className = {classes.root} >
                 <Container align="center">
                    <div item xs={6} className = {classes.form}>
                        <TextField
                         type="number"
                        
                         variant="outlined"
                         label="Airtime amount"
                         id="input-with-icon-textfield"
                         value={airtime}
                         name="airtimeAmount"

                         onChange= {(e) =>{setAirtime(e.target.value);
                          
                            }}

                        //  InputProps={{endAdornment:( <InputAdornment position="end"><Pen /></InputAdornment>),}}
                         
                        />
                        {Object.keys(airtimeError).map((key) => {return <div style={{color : "red"}}>{airtimeError[key]}</div>})}

                <div className={classes.root1} noValidate autoComplete="off">
                    <TextField
                    id="outlined-select-bank"
                    select
                    label="Select your bank"
                    value={bank}
                    onChange={handleChange}
                    variant="outlined"
                    >
                    {banks.map((bank) => (
                        <MenuItem key={bank.value} value={bank.value}>
                        {bank.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    {/* {Object.keys(bankError).map((key) => {return <div style={{color : "red"}}>{bankError[key]}</div>})} */}
                </div>
                        
                        <TextField variant="outlined" 
                        label="Phone Number" 
                        value={phone} 
                        name="phoneNo" 
                        onChange= {(e) =>setPhone(e.target.value)}/>
                         {Object.keys(phoneError).map((key) => {return <div style={{color : "red"}}>{phoneError[key]}</div>})}
                        
                        <Typography variant="h6" align="center" gutterBottom> 
                                <Button variant="contained" size="large" color="primary" className={classes.button} onClick={ onSubmit}>
                                    complete Transaction
                                </Button> 
                        </Typography>
                                             
                    </div>
                </Container>
             </form>
    
        </Paper>
        </Container>
     
    )
}

export default Formussd
