import React from 'react'
import { Button, Container, FormText, NavDropdown, Navbar } from 'react-bootstrap'

import SortByControls from '../SortByControls/SortByControls'
import ViewControls from '../ViewControls'
import { getData } from '../../utils/api'
import { sortOptions } from '../../constants/sortOptions'

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
  const resetHandle = async () => {
    localStorage.clear()
    const data = await getData()
    setStore(data)
    setIsLoading(false)
    setDisabledItems(0)
    setSortBy(sortOptions.default)
  }

  return (
    <Navbar bg='dark' variant='dark' sticky='top' className='nav-bar'>
      <Container className='nav-bar__container'>
        <NavDropdown title='View'>
          <ViewControls
            disabledItems={disabledItems}
            showTreeList={showTreeList}
            setShowTreeList={setShowTreeList}
            setDisabledItems={setDisabledItems}
            setStore={setStore}
            setSortBy={setSortBy}
            setIsLoading={setIsLoading}
          />
        </NavDropdown>

        {!showTreeList && (
          <NavDropdown title='Sort By'>
            <SortByControls sortBy={sortBy} setSortBy={setSortBy} />
          </NavDropdown>
        )}

        <FormText className='nav-bar__disabled-items'>Disabled Items: {disabledItems}</FormText>

        {!showTreeList && (
          <Button variant='danger' className='float-end ml-auto' onClick={resetHandle}>
            Reset
          </Button>
        )}
      </Container>
    </Navbar>
  )
}

export default NavBar
