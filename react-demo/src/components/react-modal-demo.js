import React from 'react';
import Modal from 'react-modal';

// custom styles as demo'd in docs
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  // binding modal to the root of the app
  Modal.setAppElement('#root')

  function ReactModalDemo(){
    // React useState hook tracking modal open/close state
    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal(){
      setIsOpen(false);
    }

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >          
          <h3>
            Modal demo with focusable content
          </h3>
          <div className="links-container">
            <a href="https://www.paciellogroup.com/">TPGi</a>
            <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a>
            <a href="https://webaim.org/">Web Aim</a>
          </div>    
          <footer className="modal-footer">
            <button  className="close-button" onClick={closeModal}>
              close
            </button>
          </footer>
        </Modal>
      </div>
    );
}

export default ReactModalDemo;