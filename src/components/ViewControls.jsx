import React from 'react';
import Form from 'react-bootstrap/Form';
import {FormGroup, FormText} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {getData} from '../utils/api';

const ViewControls = ({
	disabledItems,
	setShowTreeList,
	setDisabledItems,
	setStore,
	setSortBy,
	setIsLoading
}) => {
	const resetHandle = () => {
		localStorage.clear();
		getData(setStore, setIsLoading);
		setDisabledItems(0)
		setSortBy('default')
	}

	return (
		<Container>
			<Form className='mb-3'>
				<Form.Label>View</Form.Label>
				<FormGroup>
					<Form.Check
						inline
						defaultChecked
						label='Cards'
						name='ViewControls'
						id={'view-control-cards'}
						type={'radio'}
						onClick={() => setShowTreeList(false)}
					/>
					<Form.Check
						inline
						label='Tree List'
						name='ViewControls'
						id={'view-control-tree'}
						type={'radio'}
						onClick={() => setShowTreeList(true)}
					/>
					<FormText>Disabled Items: { disabledItems }</FormText>
					<Button
						variant='danger'
						className='float-end'
						onClick={resetHandle}
					>
						Reset
					</Button>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default ViewControls;