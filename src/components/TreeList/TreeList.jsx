import React, { useCallback, useState } from 'react'
import moment from 'moment'

import ModalImage from '../ModalImage'

import './TreeList.css'

const TreeList = ({ store }) => {
  const [show, setShow] = useState(false)
  const [modalData, setModalData] = useState('')

  const handleShow = () => setShow(true)

  const handleClick = useCallback((event) => {
    event.target.parentElement.querySelector('.nested').classList.toggle('active')
    event.target.classList.toggle('caret-down')
  }, [])

  return (
    <>
      <ul className='tree-list'>
        <li>
          <span className='caret' onClick={(event) => handleClick(event)}>
            Root Element
          </span>
          <ul className='nested'>
            {store &&
              store.map((item) => (
                <li key={item.image}>
                  <span className='caret' onClick={(event) => handleClick(event)}>
                    {item.image.split('/')[1]}
                  </span>
                  <ul className='nested'>
                    <li className='tree-list-item'>
                      <img
                        src={item.image}
                        alt=''
                        className='tree-image'
                        onClick={() => {
                          handleShow()
                          setModalData(item.image)
                        }}
                      />
                      <span>Category: {item.category}</span>
                      <span>Date: {moment(item.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    </li>
                  </ul>
                </li>
              ))}
          </ul>
        </li>
      </ul>

      <ModalImage show={show} setShow={setShow} modalData={modalData} />
    </>
  )
}

export default TreeList
