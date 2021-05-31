
	////IT WORKS

    import React, {useState, useEffect} from 'react';
    import axios from 'axios';
    import party from './image/party.png';
    import Success from './Success';
    // import pen from './image/pen.png';
    
    // import {useHistory} from 'react-router-dom';
    import { TextField,Paper, Container, Typography} from '@material-ui/core';
    //  import InputAdornment from '@material-ui/core/';
    import Error from './Error';
    import useStyle from './Styles';
    import Links from './Links';
    import Button from '@material-ui/core/Button';
    import Modal from '@material-ui/core/Modal';
    import {useHistory} from 'react-router-dom';
    // import { makeStyles } from '@material-ui/core/styles';
   
    
      function getModalStyle() {
       
      
        return {
            display: 'none', /* Hidden by default */
            position: 'fixed',
            // z-index: '1',
            paddingTop: '100px',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            overflow: 'auto',
           
            backgroundcolor: 'rgba(0,0,0,0.4)'
        };
      
      }
      
      
    const B = () => {
        const [state, setState] = useState({
            airtimeAmountError: '',
        })
        const [airtimeAmount, setAirtimeAmount] = useState('')
        const [other, setOther] = useState('')
        const [modalStyle] = useState(getModalStyle);
        const [open, setOpen] = useState(false);
        const classes = useStyle();
        const history = useHistory();
    
        const handleOpen = () => {
            setOpen(true);
          };
        
          const handleClose = () => {
            setOpen(true);
          };
    
          
      const body = (
        <div >
         
          <h2 id="simple-modal-title" className={classes.h2}>Transaction Details</h2>
          <p id=""
          className={classes.h2} >
              <table>
                  <tr>
                      <th>Airtime amount</th>
                      <td>{airtimeAmount}</td>
                  </tr>
    
                  <tr>
                      <th style={{alignItems:"flex-start"}}> Bank</th>
                      <td>{other.bank}</td>
                  </tr>
    
                  <tr>
                      <th>Phone number</th>
                      <td>{other.phoneNo}</td>
                  </tr>
    
    
              </table>
          
          </p>
          <Typography variant="h6" align="center" gutterBottom> 
            <Button variant="contained" size="large" color="primary" className={classes.button} onClick={onSubmit}>
                 Buy Airtime
            </Button>   
          </Typography>
         
        </div>
      );
        
       
    
        let isError = false;
        const errors = {}
    
        //validate otp
        function validateAirtimeAmount() {
            if(airtimeAmount.length < 3 || airtimeAmount.length === '') {
                isError = true;
                console.log('we good')
            } 
          
            else {
                isError = false;
                errors.airtimeAmountError = "Enter Airtime Amount"
            }
        }
    
          //main validate function that invokes other validate functions
          function validate(){
            validateAirtimeAmount();
    
            if(isError){
                setState({
                    ...state,
                    ...errors
                })
            } return isError;
        };
    
        useEffect(() => {
           const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/bankpayment/6');
               setOther(result.data);
            };
            fetchData();
        }, []);
    
    
        async function onSubmit (e) {
            e.preventDefault();
            const err = validate();
            if(!err) {
                let item={airtimeAmount, other}
                // console.log(item)
    
                let result= await fetch('http://localhost:5000/new', {
                method: "POST",
                body:JSON.stringify(item),
                headers: {
                    'Content-Type': "application/json",
                    "Accept": 'application/json'
                }
            })
            result = await result.json()
            console.log('result', result)
            localStorage.setItem("user-info", JSON.stringify(result))
            setTimeout(() => {
                history.push('/success')
            }, 2000);
            
            
            } else{
                setTimeout(() => {
                    <Error/>
                }, 5000); 
            }      
        }
    
        return (
            <Container maxWidth="sm">
             
                    <div>
                     <Typography variant="h5" align="center" gutterBottom style={{paddingTop:"100px"}}>
                     Buying airtime has never been this easy!
                     <img src={party} alt="" style={{marginLeft:"5px", height:"20px", width: "20px"}}/>
                     </Typography>
                  <Paper>
                
                    <Links />
                     <form className = {classes.root} onSubmit={onSubmit}>
                       
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
                               />
                               <div className="error" style={{color: "red"}}>{state.airtimeAmountError}</div>
       
                       <div className={classes.root1} noValidate autoComplete="off">
                           <TextField
                           id="bank"
                           name="bank"
                           value={other.bank} 
                           helperText="Select your bank"
                           variant="outlined" 
                           /> 
                       </div>
    
                        <div  className={classes.root1} noValidate autoComplete="off">    
                        <TextField variant="outlined" 
                        id="phoneNo"
                        value={other.phoneNo} 
                        helperText="Enter Phone number"
                        name="phoneNo" 
                       />
                       </div>  
                            <div>
                               <Typography variant="h6" align="center" gutterBottom> 
                                       <Button variant="contained" size="large" color="primary" 
                                        className={classes.button}
                                        onClick={handleOpen}
                                       >
                                           Buy Airtime
                                       </Button>   
                               </Typography>
                            </div>
                                          
                           </div>
                       </div>
    
                       <Modal 
                       open={open}
                       onClose={handleClose}
                  
                       className={classes.modal}>
                           
                           <div style={{color:'black'}} className='bankmod'>
                                {body}
                            </div> 
                            
                       </Modal>
                     
                    </form>   
            </Paper>
            </div>  
        </Container>
           
        )
    }    
    export default B;
    