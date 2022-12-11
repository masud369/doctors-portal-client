import React from 'react';
import Modal from 'react-modal';
import ModalForm from '../BookingCard/ModalForm/ModalForm';

const customStyles = {
    
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
    },
  };
  Modal.setAppElement('#root');

const ReactModal = ({closeModal,modalIsOpen,bookingsData,date}) => {



    let subtitle;
    
   

    return (
        <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5 className='text-center' style={{color:"#1cc7c1"}} ref={(_subtitle) => (subtitle = _subtitle)}>{bookingsData.subject}</h5>
        <p className='text-center text-secondary'><small>Your Appointment on { date.toDateString()}</small></p>
        <ModalForm bookedOn={bookingsData.subject} date={date} closeModal={closeModal} />
      </Modal>
        </div>
    );
};

export default ReactModal;