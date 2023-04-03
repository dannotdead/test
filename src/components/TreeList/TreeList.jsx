import React, { useCallback, useEffect, useState } from 'react'
import moment from 'moment'

import ModalImage from '../ModalImage'
import { getData } from '../../utils/api'

import './TreeList.css'

const TreeList = () => {
  const [list, setList] = useState([])
  const [show, setShow] = useState(false)
  const [modalData, setModalData] = useState('')

  useEffect(() => {
    getDataFromServer().then((data) => setList(data))
  }, [])

  const handleClick = useCallback((event) => {
    event.target.parentElement
      .querySelector('.nested')
      .classList.toggle('active')
    event.target.classList.toggle('caret-down')
  }, [])

  const getDataFromServer = async () => {
    try {
      const dataFromServer = await getData()

      return dataFromServer
    } catch (err) {
      console.error(err)
    }
  }

  const handleShow = () => setShow(true)

  return (
    <>
      <ul className='tree-list'>
        <li>
          <span className='caret' onClick={(event) => handleClick(event)}>
            Root Element
          </span>
          <ul className='nested'>
            {list.length &&
              list.map((item) => (
                <li key={item.image}>
                  <span
                    className='caret'
                    onClick={(event) => handleClick(event)}
                  >
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
                      <span>
                        Date:{' '}
                        {moment(item.timestamp).format(
                          'MMMM Do YYYY, h:mm:ss a'
                        )}
                      </span>
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
