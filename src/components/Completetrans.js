import React, {useState} from 'react';
import { Typography, Grid, Button} from '@material-ui/core'
import successalert from './image/successalert.png';

import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      direction:"row",
      justfy: "space-between",
      alignItems:"center "

    //   display: flex
    },
  });

function Completetrans(props) {
    
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = useState(true)
    
    // const [airtimeAmount, other] = props
    Modal.setAppElement('#root')
    return (
        <div className="">
          
          {/* <button onClick={() => setModalIsOpen(false)}>Open Modal</button> */}
          <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={() => setModalIsOpen(false)}
          shouldCloseOverlayClick = {false}
          style={
              {
                  overlay:{

                    // background: url(${image}) no-repeat fixed bottom;
                    backgroundColor: "grey",
                     background: 'transparent !important'
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
                 <div className="" style={{backgroundColor: "#ffffff"}}>
                    <button onClick={() =>setModalIsOpen(false)}>x</button>
                </div>
                   
              
                <Grid
                direction="row"
                justify="center"
                alignItems="center"
                container className={classes.tables}>

                 <img src={successalert} alt="" 
                 style={{marginLeft:"5px", marginTop: "30px", height:"40px", width: "40px"}}/>
                    <Grid item xs={6}>
                    airtimeAmount 
                    Bank
                    Phone Number
                    </Grid>

                    <Grid item xs={6}>
                    {props.airtimeAmount}
                    {props.bank}
                    {props.phoneNo}
                    </Grid>
                    <Typography variant="h6" align="center" gutterBottom> 
                        <Button variant="contained" size="small" className={classes.button} 
                          style={{backgroundColor: "#2E67EC", marginTop: "80px", color: "white"}} >
                                Next
                        </Button> 
                     </Typography>
                </Grid> 
               
                
          </Modal>
        </div>
    )
}

export default Completetrans

