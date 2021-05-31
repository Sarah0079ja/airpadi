import React, {useState} from 'react';
import Modal from 'react-modal';
import successalert from './image/successalert.png';
import { Typography} from '@material-ui/core'; 
import {useHistory} from 'react-router-dom';


function Success(props) {
    const [modalIsOpen, setModalIsOpen] = useState(true)
    const history = useHistory();
    // const [airtimeAmount, other] = props
    Modal.setAppElement('#root')
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
                    backgroundColor: "#E5E5E5"
                    //   backgroundColor: 'transparent !important'
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
                    <button onClick={() =>setModalIsOpen(false)}
                    {...history.push('/bankpayment')}
                    >x</button>
                </div>
                <img src={successalert} alt="" 
                 style={{marginLeft:"45%", marginTop: "20px",marginBottom:"20px", height:"40px", width: "40px" }}/>
                <Typography variant="h6" style={{marginBottom: "20px",}}>
                You have successfully purchased  {props.airtimeAmount} from your {props.bank} bank
                </Typography>      
          </Modal>
        </div>
    )
}

export default Success

