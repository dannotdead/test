import React from 'react'
import { Container } from 'react-bootstrap'

import PaginationComponent from '../Pagination/Pagination'
import { ITEMS_PER_PAGE } from '../../constants/pagination'
import { gitHubLink } from '../../constants/links'

import './Footer.css'

const Footer = ({ showTreeList, totalItems, currentPage, setCurrentPage }) => {
  return (
    <div className='footer'>
      <Container className='footer-container'>
        <div>Footer</div>
        {!showTreeList && (
          <div className='d-flex justify-content-center'>
            <PaginationComponent
              itemsCount={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
        <div>
          <i>
            Created by <a href={gitHubLink}>dannotdead</a>
          </i>
        </div>
      </Container>
    </div>
  )
}

export default Footer
