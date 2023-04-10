import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { FormGroup } from 'react-bootstrap'

import { sortOptions } from '../../constants/sortOptions'

import './SortByControls.css'

const SortByControls = ({ sortBy, setSortBy }) => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Form.Check
            inline
            checked={sortBy === sortOptions.default}
            disabled
            label='Default'
            name='SortByControls'
            type='radio'
            id='sort-by-control-default'
            className='form-check-text'
          />
          <Form.Check
            inline
            label='Name A-Z'
            name='SortByControls'
            type='radio'
            id='sort-by-control-nameAZ'
            onClick={() => setSortBy(sortOptions.nameAZ)}
            className='form-check-text'
          />
          <Form.Check
            inline
            label='Name Z-A'
            name='SortByControls'
            type='radio'
            id='sort-by-control-nameZA'
            onClick={() => setSortBy(sortOptions.nameZA)}
            className='form-check-text'
          />
          <Form.Check
            inline
            label='Category A-Z'
            name='SortByControls'
            type='radio'
            id='sort-by-control-categoryAZ'
            onClick={() => setSortBy(sortOptions.categoryAZ)}
            className='form-check-text'
          />
          <Form.Check
            inline
            label='Category Z-A'
            name='SortByControls'
            type='radio'
            id='sort-by-control-categoryZA'
            onClick={() => setSortBy(sortOptions.categoryZA)}
            className='form-check-text'
          />
          <Form.Check
            inline
            label='File Size ↑'
            name='SortByControls'
            type='radio'
            id='sort-by-control-file-size-up'
            onClick={() => setSortBy(sortOptions.fileSizeUp)}
            className='form-check-text'
          />
          <Form.Check
            inline
            label='File Size ↓'
            name='SortByControls'
            type='radio'
            id='sort-by-control-file-size-down'
            onClick={() => setSortBy(sortOptions.fileSizeDown)}
            className='form-check-text'
          />
          <Form.Check
            inline
            label='Time Created ↑'
            name='SortByControls'
            type='radio'
            id='sort-by-control-time-created-up'
            onClick={() => setSortBy(sortOptions.timeCreatedUp)}
            className='form-check-text'
          />
          <Form.Check
            inline
            label='Time Created ↓'
            name='SortByControls'
            type='radio'
            id='sort-by-control-time-created-down'
            onClick={() => setSortBy(sortOptions.timeCreatedDown)}
            className='form-check-text'
          />
        </FormGroup>
      </Form>
    </Container>
  )
}

export default SortByControls
