import {useState} from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import moment from 'moment';

import './CardItem.css';

const CardItem = ({ img, store, setStore, setDisabledItems }) => {
	const [dateTitle] = useState(
		moment(img.timestamp).format('MMMM Do YYYY, h:mm:ss a')
	);

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
				<Card.Img variant='top' src={img.image} className='card-image' />
				<Card.Body>
					<Card.Title>{dateTitle}</Card.Title>
				</Card.Body>
				<div className='card-close-btn'>
					<CloseButton onClick={() => deleteItem(img.image)} />
				</div>
			</Card>
		</Col>
	);
}
 
export default CardItem;