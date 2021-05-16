import React, {useState} from 'react';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';

import { TextField, Typography} from '@material-ui/core';
import useStyle from './Styles';
import Button from '@material-ui/core/Button';

function Otp() {

        const [otp, setOtp] = useState('')
        // const [isError, setIsError] = useState(false)
        const history = useHistory();
        const classes = useStyle();
        

       async  function onSubmit () {
            let item = {otp}
            console.log(item)

        let result = await fetch('http://localhost:8000/otp', {
                method: "POST",
                body:JSON.stringify(item),
                headers: {
                    'Content-Type': "application/json",
                    "Accept": 'application/json'
                }
            })
            result = await result.json()
            console.log('result', result)
            localStorage.setItem("user-info", JSON.stringify())
            history.push("/nolink")
        }
       
      
    
    const [modalIsOpen, setModalIsOpen] = useState(true)
    return (
        <div className="">
         
          <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={() => setModalIsOpen(false)}
          shouldCloseOverlayClick = {false}
          style={
              {
                  overlay:{
                    // background: url(${image}) no-repeat fixed bottom;
                    backgroundColor: "grey"
                    //   backgroundColor: 'transparent !important'
                  },
                  content: {
                      top: "50%",
                      left: "50%",
                      right: "auto",
                      bottom: "auto",
                      marginRight: "-50%",
                      transform: "translate(-50%, -50%)",
                      width:"40%"
                  }
              }
          }>
            
                      <div>
                          <form className = {classes.root2} >
                          <div className = {classes.reg1} align="center">
                                <div item xs={12} className = {classes.form}>
                                  <Typography variant="h6" align="center"  gutterBottom className = {classes.reg1} style={{fontWeight: "900", align: "center"}}> 
                                        Please confirm the OTP code sent to the phone number provided 
                                  </Typography>

                                  <TextField variant="outlined"
                                   label="Secure OTP" 
                                   type="number" 
                                   id="otp" 
                                   helperText="Resend OTP" 
                                   value={otp} 
                                   name="otp" 
                                   onChange= {(e) =>setOtp(e.target.value)}/>
                                    
                                  <Typography variant="h6" align="center" gutterBottom> 
                                    <Button variant="contained" size="large" className={classes.button} style={{backgroundColor: "#2E67EC", marginTop: "80px", color: "white"}} onClick={ onSubmit}>
                                      Next
                                    </Button> 
                                  </Typography>
                              </div>

                                
                                </div>
                               
                           </form>
                     </div>
                {/* <div>
                    <button onClick={() =>setModalIsOpen(false)}>x</button>
                </div> */}
          </Modal>
        </div>
    )
}

export default Otp

