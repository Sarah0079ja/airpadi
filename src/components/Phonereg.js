import React, {useState} from 'react';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';

 import Error from './Error';

import { TextField, Typography} from '@material-ui/core';
import useStyle from './Styles';
import Button from '@material-ui/core/Button';

function Phonereg1() {
        //  const phoneNoRegex = RegExp(/^234[0-9]{11}/)

       const [state, setState] = useState({
           phoneNoError: '',
       })
       const [phoneNo, setPhoneNo]= useState('')
        const history = useHistory();
        const classes = useStyle();

        let isError = false;
        const errors = {}

        //validate phoneNo
        function validatePhoneNo() {
            if(phoneNo.length < 11 || phoneNo.length === '') {
                isError = true;
                console.log('we good')
            } 
          
            else {
                isError = false;
                errors.phoneNoError = "Phone Number must be 11 digits"
            }
        }
       
        //main validate function that invokes other validate functions
        function validate(){
            validatePhoneNo();

            if(isError){
                setState({
                    ...state,
                    ...errors
                })
            } return isError;
        };
        
        async function onSubmit (e) {
            e.preventDefault();
            const err = validate();
            if (!err) {
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
            } else {
                setTimeout(() => {
                    <Error/>
                }, 5000);
            }
                 
                        
}
        

    const [modalIsOpen, setModalIsOpen] = useState(true)
    Modal.setAppElement('#root')
    return (
        <div className="">
         
          <Modal 
          isOpen={modalIsOpen} 
           onRequestClose={() => setModalIsOpen(false)}
        //   shouldCloseOverlayClick = {false}
          style={
              {
                  overlay:{
                   
                    backgroundColor: "#E5E5E5"
                   
                  },
                  content: {
                      top: "50%",
                      left: "50%",
                      right: "auto",
                      bottom: "auto",
                      marginRight: "-50%",
                      transform: "translate(-50%, -50%)",
                      
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
                                type="text"
                                label="Phone Number" 
                                id="phoneNo"
                                maxLength="11"
                                value={phoneNo}     
                                onChange={(e) => 
                                setPhoneNo(e.target.value)}   
                                name="phoneNo"    
                                />
                                <div className="error" style={{color: "red"}}>{state.phoneNoError}</div>
                                    
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
          
          </Modal>
        </div>
    )
}

export default Phonereg1