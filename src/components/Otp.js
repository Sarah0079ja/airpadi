import React, {useState} from 'react';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';
import background1 from './image/background1.png'
import { TextField, Typography} from '@material-ui/core';
import useStyle from './Styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Error from './Error';


function Otp() {
  const [state, setState] = useState({
    otpError: '',
})

        const [otp, setOtp] = useState('')
        
        const history = useHistory();
        const classes = useStyle();
        
        let isError = false;
        const errors = {}

          //validate otp
          function validateOtp() {
            if(otp.length === 5) {
                isError = false;
                console.log('we good')
            } 
          
            else {
                isError = true;
                errors.otpError = "Enter OTP"
            }
        }

        //main validate function that invokes other validate functions
        function validate(){
          validateOtp();

          if(isError){
              setState({
                  ...state,
                  ...errors
              })
          } return isError;
      };

       async  function onSubmit (e) {
            e.preventDefault();
            const err = validate();
            if(!err){

            
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
       else {
        setTimeout(() => {
          <Error/>
      }, 5000);
      }}
       
      
    
    const [modalIsOpen, setModalIsOpen] = useState(true)
    Modal.setAppElement('#root')
    return (
        <div className="">
         
          <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={() => setModalIsOpen(false)}
          // shouldCloseOverlayClick = {false}
          style={
              {
                  overlay:{
                    backgroundImage: `url(${background1}) no-repeat fixed bottom`,
                     backgroundColor: "grey",
                    // backgroundSize: "cover"
                      //  backgroundColor: 'transparent !important'
                  },
                  content: {
                      top: "60%",
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
                                  <Typography variant="h6" align="center"  gutterBottom className = {classes.reg1} 
                                  style={{fontWeight: "900", align: "center", display: "inline-block"}}> 
                                        Please confirm the OTP code sent to the phone number provided 
                                  </Typography>
                                  <div className="error" style={{color: "red"}}>{state.otpError}</div>
                                  <TextField variant="outlined"
                                   label="Secure OTP" 
                                   type="text" 
                                   id="otp"  
                                   value={otp} 
                                   name="otp" 
                                   onChange= {(e) =>setOtp(e.target.value)}/>
                                   <Link to="" color="secondary" variant="inherit">
                                      <Typography style={{textDecoration: "none", marginRight: "110px"}}>
                                          Reset OTP
                                      </Typography>
                        
                                   </Link>

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

