import React from 'react'
import Modal from 'react-bootstrap/Modal'

const ModalImage = ({ show, setShow, modalData }) => {
  const handleClose = () => setShow(false)

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton />
      <img src={modalData} alt='' />
    </Modal>
  )
}

export default ModalImage
