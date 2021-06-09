import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import rawData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedBeast extends React.Component {

  render() {
    return (
      <div>
         <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
            <img src={this.props.src} onClick={this.numOfHorned} />
            
           <p>{this.props.title}</p>
          
               <p>❤= {this.state.Horned}</p>
                
            
                <p>{this.props.description}</p>

            </Modal.Body>
          
            <Modal.Footer>
              <Button variant="secondary">Close</Button>
        
            </Modal.Footer>
          </Modal.Dialog>
      </div>
    );
  }
}

export default SelectedBeast;