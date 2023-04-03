import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import SortByControls from '../SortByControls'
import ViewControls from '../ViewControls'

import './NavBar.css'

const NavBar = ({
  disabledItems,
  showTreeList,
  sortBy,
  setShowTreeList,
  setDisabledItems,
  setStore,
  setSortBy,
  setIsLoading,
}) => {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' className='nav-bar'>
      <ViewControls
        disabledItems={disabledItems}
        showTreeList={showTreeList}
        setShowTreeList={setShowTreeList}
        setDisabledItems={setDisabledItems}
        setStore={setStore}
        setSortBy={setSortBy}
        setIsLoading={setIsLoading}
      />

      {!showTreeList && <SortByControls sortBy={sortBy} setSortBy={setSortBy} />}
    </Navbar>
  )
}

export default NavBar
