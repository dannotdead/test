import React from 'react'

import './Dropdown.css'

const Dropdown = ({ title, children }) => {
  return (
    <div className='dropdown'>
      <button className='dropdown__button'>{title}</button>

      <div className='dropdown__content'>{children}</div>
    </div>
  )
}

export default Dropdown
