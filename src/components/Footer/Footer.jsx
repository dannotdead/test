import React from 'react'
import { Container } from 'react-bootstrap'

import PaginationComponent from '../Pagination'
import { ITEMS_PER_PAGE } from '../../utils/const'

import './Footer.css'

const Footer = ({ totalItems, currentPage, setCurrentPage }) => {
  return (
    <div className='footer'>
      <Container className='footer-container'>
        <div>Footer</div>
        <div className='d-flex justify-content-center'>
          <PaginationComponent
            itemsCount={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div>
          <i>
            Created by <a href='https://github.com/dannotdead'>dannotdead</a>
          </i>
        </div>
      </Container>
    </div>
  )
}

export default Footer
