import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import party from './image/party.png';
import Success from './Success';
import banks from './banks.json';
import Error from './Error';
import { TextField,Paper, Container, Typography, MenuItem} from '@material-ui/core';
// import { Container } from '@material-ui/core';
import useStyle from './Styles';
import Links from './Links';
import Button from '@material-ui/core/Button';



const Ussd = () => {
    const [state, setState] = useState({
        airtimeAmountError: '',
        bankError: "",
        phoneNoError: ""

    })
    const [airtimeAmount, setAirtimeAmount] = useState('')
    const [bank, setBank] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const classes = useStyle();
    const history = useHistory();
    let isError = false;
    const errors = {}

     //validate airtime
     function validateAirtimeAmount() {
        if(airtimeAmount.length >= 3) {
            isError = false;
            console.log('we good')
        } 
      
        else {
            isError = true;
            errors.airtimeAmountError = "Enter Airtime Amount"
        }
    }

    //validate PhoneNo
    function validatePhoneNo() {
        if(phoneNo.length === 11) {
            isError = false;
            console.log('we good')
        } 
      
        else {
            isError = true;
            errors.phoneNoError = "Enter Airtime Amount"
        }
    }

     //main validate function that invokes other validate functions
     function validate(){
        validateAirtimeAmount();
        validatePhoneNo();

        if(isError){
            setState({
                ...state,
                ...errors
            })
        } return isError;
    };

    const handleChange = (e) => {
      setBank(e.target.value);
     };

     async function onSubmit (e){
                e.preventDefault();
                const err = validate();
                if(!err) {
                 let item= {airtimeAmount, phoneNo, bank}
                  console.log(item);
        
                 let result = await fetch('http://localhost:5000/otp', {
                  method: "POST",
                  body: JSON.stringify(item),
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
                 })
                 result = result.json()
                 localStorage.setItem("user-info", JSON.stringify(result))
                 history.push("/success") 
            } else{
                setTimeout(() => {
                    <Error/>
                }, 5000); 
            
            }   }
    return (
        
        <>
        
            <Container maxWidth="sm" className = {classes.ussd} >
          
                <div>
                 <Typography variant="h5" align="center" gutterBottom style={{paddingTop:"60px"}}>
                 Buying airtime has never been this easy!
                 <img src={party} alt="" style={{marginLeft:"5px", height:"20px", width: "20px"}}/>
                 </Typography>
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
                            value={airtimeAmount}
                            name="airtimeAmount"
                            onChange={e => setAirtimeAmount(e.target.value)}
                            helperText= "Fill in airtime"
                           />
                           <div className="error" style={{color: "red"}}>{state.airt}</div>
   
                   <div className={classes.root1} noValidate autoComplete="off">
                       <TextField
                       select
                       id="bank"
                       name="bank"
                       label="Select your Bank"
                    //    value={value.bank} 
                       onChange={handleChange}
                       helperText="Select your bank"
                       variant="outlined" 
                       >
                        {banks.map((bank) => (
                        <MenuItem key={bank.value} value={bank.value}>
                        {bank.label}
                        </MenuItem>
                    ))}
                       </TextField> 
                   </div>

                    <div  className={classes.root1} noValidate autoComplete="off">    
                    <TextField  
                    id="phoneNo"
                    name="phoneNo"
                    label="Enter your Phone Number"
                    value={phoneNo}
                    onChange={e => setPhoneNo(e.target.value)} 
                    helperText="Enter Phone number"
                    variant="outlined"  
                   />
                   </div>  
   
                           <Typography variant="h6" align="center" gutterBottom> 
                                   <Button variant="contained" size="large" color="primary" className={classes.button}
                                    onSubmit={onSubmit}>
                                       Buy Airtime
                                   </Button> 
                                  
                           </Typography>
                                      
                       </div>
                   </div>
                 
                </form>   
       
        </Paper>
        </div>
         
       </Container>  
         
        </>
    )
}

export default Ussd
