import React from 'react';
import AriaModal from '../../node_modules/react-aria-modal';

class ReactAriaModal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalActive: false
        };
        
        // Docs show binding of methods but not necessary with the use of arrow functions
        // eg: this.activateModal = this.activateModal.bind(this);
    }
    
    activateModal = () => {
        this.setState({ modalActive: true });
    };
    
    deactivateModal = () => {
        this.setState({ modalActive: false });
    };
    
    getApplicationNode = () => {
        return document.getElementById('modal-container');
    };
    
    render() {
        const modal = this.state.modalActive
        ? <AriaModal
        titleText="demo one"
        // onExit is a method from the library handles clicking away, esc key and can be set to close custom buttons
        onExit={this.deactivateModal}
        // initialFocus is a method from the library and sends focus wherever you choose 
        initialFocus="#demo-one-deactivate"
        // getApplicationNode looks for the element with the id passed into it in the function definition (in this case "modal-container")
        getApplicationNode={this.getApplicationNode}
        underlayStyle={{ paddingTop: '2em' }}
        >
          <div id="demo-one-modal" className="modal">
            <div className="modal-body">
              <h3>
                Modal demo with focusable content
              </h3>
              <div className="links-container">
                <a href="https://www.paciellogroup.com/">TPGi</a>
                <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a>
                <a href="https://webaim.org/">Web Aim</a>
              </div>
            </div>
            <footer className="modal-footer">
              <button  className="close-button" id="demo-one-deactivate" onClick={this.deactivateModal}>
                close
              </button>
            </footer>
          </div>
        </AriaModal>
      : false;
      
      return (
          <div>
        <button onClick={this.activateModal}>
          activate modal
        </button>
        {modal}
      </div>
    );
}
}


export default ReactAriaModal;