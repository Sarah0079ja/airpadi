import React, {useState} from 'react';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';
// import Spinner from './Spinner';
// import axios from 'axios';
// import Success from './Success';
import Error from './Error';

import { TextField, Typography} from '@material-ui/core';
import useStyle from './Styles';
import Button from '@material-ui/core/Button';

function Phonereg1() {

        const [phoneNo, setPhoneNo] = useState('')
        const [isError, setIsError] = useState(false)
        // const [loading, setLoading] = useState(false)
        const history = useHistory();
        const classes = useStyle();
        

        async function onSubmit () {
                try {
                    let item={phoneNo}
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
                history.push("/otp")
                } catch (error) {
                    <Error/>
                }


               
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
                   
                    backgroundColor: "#000000"
                   
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
                            <Typography variant="h6" 
                             align="center" 
                             gutterBottom 
                             className = {classes.reg1}
                             style={{fontWeight: "900", align: "center"}}
                                    
                            > 
                             Welcome to AirtimePadi, please register your phone number below 
                            </Typography>

                            <TextField variant="outlined" 
                                type="tel"
                                error={isError}
                                label="Phone Number" 
                                id="phoneNo"
                                value={phoneNo}
                                        // value={formik.values.phoneNo} 
                                onChange={(e) => {
                                setPhoneNo(e.target.value);
                                if(e.target.value.length === 11) {
                                    setIsError(true);
                                }
                                }}   
                                name="phoneNo"    
                                />
                                    
                             <Typography variant="h6" align="center" gutterBottom> 
                                <Button variant="contained" size="small" className={classes.button} 
                                 style={{backgroundColor: "#2E67EC", marginTop: "80px", color: "white"}} onClick={onSubmit}>
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

export default Phonereg1