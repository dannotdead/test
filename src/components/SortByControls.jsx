import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { FormGroup } from 'react-bootstrap'

import { sortOptions } from '../constants/sortOptions'

const SortByControls = ({ sortBy, setSortBy }) => {
  return (
    <Container>
      <Form className='mb-3'>
        <Form.Label>Sort By</Form.Label>

        <FormGroup>
          <Form.Check
            inline
            checked={sortBy === 'default'}
            disabled
            label='Default'
            name='SortByControls'
            type='radio'
            id='sort-by-control-default'
          />
          <Form.Check
            inline
            label='Name A-Z'
            name='SortByControls'
            type='radio'
            id='sort-by-control-nameAZ'
            onClick={() => setSortBy(sortOptions.nameAZ)}
          />
          <Form.Check
            inline
            label='Name Z-A'
            name='SortByControls'
            type='radio'
            id='sort-by-control-nameZA'
            onClick={() => setSortBy(sortOptions.nameZA)}
          />
          <Form.Check
            inline
            label='Category A-Z'
            name='SortByControls'
            type='radio'
            id='sort-by-control-categoryAZ'
            onClick={() => setSortBy(sortOptions.categoryAZ)}
          />
          <Form.Check
            inline
            label='Category Z-A'
            name='SortByControls'
            type='radio'
            id='sort-by-control-categoryZA'
            onClick={() => setSortBy(sortOptions.categoryZA)}
          />
          <Form.Check
            inline
            label='File Size ↑'
            name='SortByControls'
            type='radio'
            id='sort-by-control-file-size-up'
            onClick={() => setSortBy(sortOptions.fileSizeUp)}
          />
          <Form.Check
            inline
            label='File Size ↓'
            name='SortByControls'
            type='radio'
            id='sort-by-control-file-size-down'
            onClick={() => setSortBy(sortOptions.fileSizeDown)}
          />
          <Form.Check
            inline
            label='Time Created ↑'
            name='SortByControls'
            type='radio'
            id='sort-by-control-time-created-up'
            onClick={() => setSortBy(sortOptions.timeCreatedUp)}
          />
          <Form.Check
            inline
            label='Time Created ↓'
            name='SortByControls'
            type='radio'
            id='sort-by-control-time-created-down'
            onClick={() => setSortBy(sortOptions.timeCreatedDown)}
          />
        </FormGroup>
      </Form>
    </Container>
  )
}

export default SortByControls
