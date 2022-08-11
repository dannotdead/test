import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {FormGroup} from 'react-bootstrap';

const SortByControls = ({ store, setStore, sortBy, setSortBy }) => {
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
						type={'radio'}
						id={'sort-by-control-default'}
					/>
					<Form.Check
						inline
						label='Name A-Z'
						name='SortByControls'
						type={'radio'}
						id={'sort-by-control-nameAZ'}
						onClick={() => {
							setSortBy('Name A-Z')
							setStore([...store].sort(
								(x, y) => x.image.split('/')[1].localeCompare(
									y.image.split('/')[1])));
						}}
					/>
					<Form.Check
						inline
						label='Name Z-A'
						name='SortByControls'
						type={'radio'}
						id={'sort-by-control-nameZA'}
						onClick={() => {
							setSortBy('Name Z-A')
							setStore([...store].sort(
								(x, y) => y.image.split('/')[1].localeCompare(
									x.image.split('/')[1])));
						}}
					/>
					<Form.Check
						inline
						label='Category A-Z'
						name='SortByControls'
						type={'radio'}
						id={'sort-by-control-categoryAZ'}
						onClick={() => {
							setSortBy('Category A-Z')
							setStore([...store].sort((x, y) => x.category.localeCompare(y.category)))}}
					/>
					<Form.Check
						inline
						label='Category Z-A'
						name='SortByControls'
						type={'radio'}
						id={'sort-by-control-categoryZA'}
						onClick={() => {
							setSortBy('Category Z-A')
							setStore([...store].sort((x, y) => y.category.localeCompare(x.category)))}}
					/>
					<Form.Check
						inline
						label='File Size ↑'
						name='SortByControls'
						type={'radio'}
						id={'sort-by-control-file-size-up'}
						onClick={() => {
							setSortBy('File Size Up')
							setStore([...store].sort((x, y) => x.filesize - y.filesize));
						}}
					/>
					<Form.Check
						inline
						label='File Size ↓'
						name='SortByControls'
						type={'radio'}
						id={'sort-by-control-file-size-down'}
						onClick={() => {
							setSortBy('File Size Down')
							setStore([...store].sort((x, y) => y.filesize - x.filesize));
						}}
					/>
					<Form.Check
						inline
						label='Time Created ↑'
						name='SortByControls'
						type={'radio'}
						id={'sort-by-control-time-created-up'}
						onClick={() => {
							setSortBy('Time Created Up')
							setStore([...store].sort((x, y) => x.timestamp - y.timestamp));
						}}
					/>
					<Form.Check
						inline
						label='Time Created ↓'
						name='SortByControls'
						type={'radio'}
						id={'sort-by-control-time-created-down'}
						onClick={() => {
							setSortBy('Time Created Down')
							setStore([...store].sort((x, y) => y.timestamp - x.timestamp));
						}}
					/>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default SortByControls;