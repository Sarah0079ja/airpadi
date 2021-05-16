import React from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as yup from 'yup';
// import {useHistory} from 'react-router-dom';
import { TextField,Paper, Container, Typography} from '@material-ui/core';

// import InputAdornment from '@material-ui/core/Pen';

import MenuItem from '@material-ui/core/MenuItem';
import useStyle from './Styles';
import Links from './Links';
import Button from '@material-ui/core/Button';
import banks from './banks.json'

const validationSchema = yup.object({
  airtimeAmount: yup.string().matches(/^[1-9]{3}/,"Enter your airtime amount").required('Required'),
  phoneNo: yup.string().matches(/^[0-9]{2}[0-9]{8}/,"Enter your phone number").required('Required'),
  bank: yup.string().required("Select your bank"),
})

const Bankpayment = () => {
 
  const onSubmit = async (values) => {
    // const {airtimeAmount, phoneNo, bank} = values;
    const response = await axios.post('http://localhost:8000/bankpayment').catch((err) => {
      if(err && err.response) 
        console.log('Error: ', err);
    });
      if(response && response.data) {
         console.log(response.data);
      } 
      
      // localStorage.setItem("user-info", JSON.stringify(response))
    };

    const formik = useFormik({
      initialValues: {
        airtimeAmount: "",
        phoneNo: "",
        bank: []
      },
      validationOnBlur: true,
      onSubmit,
      validationSchema: validationSchema
    })
     

    // const formValidation = () => {
       const classes = useStyle();
    return (
      
        <div maxWidth="sm">

            <Container maxWidth="sm" className = {classes.ussd} >
                <Typography variant="h5" align="center" gutterBottom>
                  Buying airtime has never been this easy!
                </Typography>
            </Container> 
        <Paper>
            
              <Links />
             <form className = {classes.root} onSubmit={formik.handleSubmit}>
                 <div align="center">
                    <div item xs={6} className = {classes.form}>
                        <TextField
                         type="number"
                         variant="outlined"
                         label="Airtime amount"
                         id="airtimeAmount"
                         value={formik.values.airtimeAmount}
                         name="airtimeAmount"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         error={formik.touched.airtimeAmount && Boolean(formik.errors.airtimeAmount) }
                         helperText={formik.touched.airtimeAmount && formik.errors.airtimeAmount}
                        
                        //  id="input-with-icon-textfield"
                        //  value={airtime}
                      
                        //  InputProps={{endAdornment:( <InputAdornment position="end"></InputAdornment>),}}
                        />

                <div className={classes.root1} noValidate autoComplete="off">
                    <TextField
                    id="bank"
                    name="bank"
                    select
                    label="Select your bank"
                    value={formik.values.bank} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.bank && Boolean(formik.errors.bank)}
                    helperText={formik.touched.bank && formik.errors.bank}
                    variant="outlined"
                    // value={bank}
                    // onChange={handleChange}
                    
                    >
                    {banks.map((bank) => (
                        <MenuItem key={bank.value} value={bank.value}>
                        {bank.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    
                </div>
                        
                        <TextField variant="outlined" 
                        label="Phone Number" 
                        id="phoneNo"
                        value={formik.values.phoneNo} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                        helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                        name="phoneNo" 
                        />
                        <Typography variant="h6" align="center" gutterBottom> 
                                <Button variant="contained" size="large" color="primary" className={classes.button} >
                                    complete Transaction
                                </Button> 
                        </Typography>
                        
                        
                        
                                    
                    </div>
                </div>
             </form>
    
        </Paper>
        </div>
     
    )
}

export default Bankpayment;
