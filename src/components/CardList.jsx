import React, { useMemo } from 'react'

import CardItem from './CardItem/CardItem'
import { ITEMS_PER_PAGE } from '../constants/pagination'
import { sortData } from '../utils/sortData'

const CardList = ({
  sortBy,
  store,
  currentPage,
  setStore,
  setDisabledItems,
}) => {
  const list = useMemo(() => {
    return sortData(store, sortBy).slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )
  }, [store, sortBy, currentPage])

  return (
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
  )
}

export default CardList
