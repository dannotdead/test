import React, {useState} from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import moment from 'moment';

import './CardItem.css';
import ModalImage from '../ModalImage';

const CardItem = ({ img, store, setStore, setDisabledItems }) => {
	const [dateTitle] = useState(
		moment(img.timestamp).format('MMMM Do YYYY, h:mm:ss a')
	);
	const [show, setShow] = useState(false)
	const [modalData, setModalData] = useState('')

	const handleShow = () => setShow(true)

	const deleteItem = (image) => {
		let data = JSON.parse(localStorage.getItem('DeletedItems'))
		if (data) {
			data = [...data, image]
		} else {
			data = [image]
		}
		setStore(store.filter(item => item.image !== image))
		setDisabledItems((prevState) => prevState + 1)
		localStorage.setItem('DeletedItems', JSON.stringify(data))
	}

	return (
		<Col>
			<Card>
				<Card.Img
					variant='top'
					src={img.image}
					className='card-image'
					onClick={() => {
						handleShow()
						setModalData(img.image)
					}}
				/>
				<Card.Body>
					<Card.Title>{img.image.split('/')[1]}</Card.Title>
					<Card.Subtitle>Category: {img.category}</Card.Subtitle>
					<Card.Text>Date: {dateTitle}</Card.Text>
				</Card.Body>
				<div className='card-close-btn'>
					<CloseButton onClick={() => deleteItem(img.image)} />
				</div>
			</Card>
			<ModalImage
				show={show}
				setShow={setShow}
				modalData={modalData}
			/>
		</Col>
	);
}
 
export default CardItem;