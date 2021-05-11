import React, {useState} from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import image from "./image/backgroundimage.png";
import { TextField,Paper, Container, Typography} from '@material-ui/core';

import useStyle from './Styles';
import Button from '@material-ui/core/Button';


const Styles = styled.div`
  .jumbo {
    background: url(${image}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    position: relative;
    
   
  }
  .overlay {
    background-color: #000000;
    background-size: cover;
    opacity: 0.9;
    postition: fixed;
    height: 90vh;
    border-radius: 0;
    padding-top: 90px;
    top: 50%;
    left: 50%;
    bottom: 0; 
  }
 
`;

const Phonereg = () => {
    const classes = useStyle();
    
    function onSubmit() {
      let item= { phone}
    //   console.log(item)
    }

    const [phone, setPhone] = useState('');

       return (
         <Styles>
           <Jumbo fluid className="jumbo">
             <div className="overlay">
               <div className="">
                 <Container maxWidth="sm" >
                     <Paper >
                            <form className = {classes.root2} >

                                <div className = {classes.reg1} align="center">
                                    <div item xs={12} className = {classes.form}>
                                    <Typography variant="h6" align="center" gutterBottom className = {classes.reg1} style={{fontWeight: "900", align: "center"}}> 
                                        Welcome to AirtimePadi, please register your phone number below 
                                    </Typography>

                                    <TextField variant="outlined" label="Phone Number" value={phone} name="phoneNo" onChange= {(e) =>setPhone(e.target.value)}/>
                                    
                                    <Typography variant="h6" align="center" gutterBottom> 
                                        <Button variant="contained" size="large" className={classes.button} style={{backgroundColor: "#2E67EC", marginTop: "80px", color: "white"}} onClick={ onSubmit}>
                                            Next
                                        </Button> 
                                    </Typography>
                                    </div>

                                
                                </div>  
                            </form>
                     </Paper>
                     <form className = {classes.root}>

                         <div align="center">
                         <TextField variant="outlined" label="Phone Number" value={phone} name="phone" onChange= {(e) =>setPhone(e.target.value)}/> 
                         </div>

                     </form>

                 </Container>
                 
               </div>
             </div>
           </Jumbo>
         </Styles>
       )
};
export default Phonereg;