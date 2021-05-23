
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
    
    
    function rand() {
        return Math.round(Math.random() * 20) - 10;
      }
    
      function getModalStyle() {
        const top = 50 + rand();
        const left = 45 + rand();
      
        return {
            // top: "50%",
            // left: "50%",
            // right: "auto",
            // bottom: "auto",
            // marginRight: "-50%",
            // transform: "translate(-50%, -50%)",
            // width:"40%"
            //  width:  "200px",
            //  height: "200px",
             top: `${top}%`,
             left: `${left}%`,
             bottom: 'auto',
             marginRight: "-50%",
             transform: `translate(-${top}%, -${left}%)`,
             color: 'black',
             align: "center"
        };
      }
    
    // const useStyles = makeStyles((theme) => ({
     
    // }));
    
      
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
            setOpen(false);
          };
    
          
      const body = (
        <div style={modalStyle} className={classes.mod} >
            <Paper>
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
          </Paper>
        </div>
      );
        
        // const [count, setCount] = useState(1)
        // const history = useHistory();
    
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
            const result = await axios.get('http://localhost:8000/b/8');
               setOther(result.data);
            };
            fetchData();
        }, []);
    
    
        async function onSubmit (e) {
            e.preventDefault();
            const err = validate();
            if(!err) {
                let item={airtimeAmount, other}
                console.log(item)
    
                let result= await fetch('http://localhost:8000/user', {
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
            }, 5000);
            
            
            } else{
                setTimeout(() => {
                    <Error/>
                }, 5000); 
            }      
        }
    
        return (
            <Container maxWidth="sm">
                 <div>
              
                 </div>
                  
                    {/* <div maxWidth="sm" className = {classes.ussd} >
                        <Success airtimeAmount={airtimeAmount} phoneNo={other.phoneNo} />
                        <Completetrans airtimeAmount={airtimeAmount} phoneNo={other.phoneNo} bank={other.bank}/>
                    </div>  */}
    
                    <div>
                     <Typography variant="h5" align="center" gutterBottom>
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
                                       <Button variant="contained" size="large" color="primary" className={classes.button}
                                        
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
                       aria-labelledby="simple-modal-title"
                       aria-describedby="simple-modal-description"
                       className={classes.modal}>
                           
                           <div style={{color:'black'}}>
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
    