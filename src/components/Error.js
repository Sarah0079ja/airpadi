import React, {useState} from 'react';
import Modal from 'react-modal';
import { Typography} from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error';
import useStyle from './Styles';

function Error() {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const classes = useStyle();
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
               
               <div >
                    <button className={classes.modalbutton} onClick={() =>setModalIsOpen(false)}>x</button>
               </div>
               
                <div className={classes.error}>
                <ErrorIcon fontSize="3.5rem"/>
                </div>
                
                <Typography style={{marginBottom: "20px"}}>
                We have encountered an error, please take
                a few minutes and try again
                </Typography>
               
                
          </Modal>
        </div>
    )
}

export default Error

