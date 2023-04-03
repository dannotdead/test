import React from 'react'
import Form from 'react-bootstrap/Form'
import { FormGroup, FormText } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import { getData } from '../utils/api'
import { sortOptions } from '../constants/sortOptions'

const ViewControls = ({
  disabledItems,
  showTreeList,
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
    <Container>
      <Form className='mb-3 w-100'>
        <Form.Label>View</Form.Label>
        <FormGroup>
          <Form.Check
            inline
            defaultChecked
            label='Cards'
            name='ViewControls'
            id='view-control-cards'
            type='radio'
            onClick={() => setShowTreeList(false)}
          />
          <Form.Check
            inline
            label='Tree List'
            name='ViewControls'
            id='view-control-tree'
            type='radio'
            onClick={() => setShowTreeList(true)}
          />
          <FormText>Disabled Items: {disabledItems}</FormText>
          {!showTreeList && (
            <Button variant='danger' className='float-end ml-auto' onClick={resetHandle}>
              Reset
            </Button>
          )}
        </FormGroup>
      </Form>
    </Container>
  )
}

export default ViewControls
