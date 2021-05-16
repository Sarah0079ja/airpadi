import React, {useState} from 'react';
import Modal from 'react-modal';
// import Formussd from './Formussd'

function Success() {
    const [modalIsOpen, setModalIsOpen] = useState(true)
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
                    backgroundColor: "#000000"
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
                {/* <Formussd/> */}
                <h3>You have successfully purchased ..... from your ... bank</h3>
                <div>
                    <button onClick={() =>setModalIsOpen(false)}>x</button>
                </div>
          </Modal>
        </div>
    )
}

export default Success

