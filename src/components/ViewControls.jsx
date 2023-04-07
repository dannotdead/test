import React from 'react'
import { FormGroup, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

const ViewControls = ({ setShowTreeList }) => {
  return (
    <Container>
      <Form>
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
        </FormGroup>
      </Form>
    </Container>
  )
}

export default ViewControls
