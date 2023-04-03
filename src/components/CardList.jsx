import React, { useMemo, useState } from 'react'
import Container from 'react-bootstrap/Container'

import PaginationComponent from './Pagination'
import CardItem from './CardItem/CardItem'
import { ITEMS_PER_PAGE } from '../utils/const'
import { sortData } from '../utils/sortData'

const CardList = ({ sortBy, store, setStore, setDisabledItems }) => {
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const list = useMemo(() => {
    setTotalItems(store.length)

    return sortData(store, sortBy).slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )
  }, [store, sortBy, currentPage])

  return (
    <>
      <div className='row row-cols-1 row-cols-sm-3 row-cols-md-3 g-4 mb-3'>
        {list.map((img) => (
          <CardItem
            key={img.image}
            img={img}
            store={store}
            setStore={setStore}
            setDisabledItems={setDisabledItems}
          />
        ))}
      </div>
      <Container>
        <div className='d-flex justify-content-center'>
          <PaginationComponent
            itemsCount={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            setCurrentPage={(page) => setCurrentPage(page)}
          />
        </div>
      </Container>
    </>
  )
}

export default CardList
