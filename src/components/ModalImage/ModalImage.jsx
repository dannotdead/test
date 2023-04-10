import React from 'react'
import Modal from 'react-bootstrap/Modal'

import './ModalImage.css'

const ModalImage = ({ show, setShow, modalData }) => {
  const handleClose = () => setShow(false)

  return (
    <Modal show={show} onHide={handleClose} centered size='lg'>
      <Modal.Header closeButton />
      <img src={modalData} alt='' className='modal__image' />
    </Modal>
  )
}

export default ModalImage
