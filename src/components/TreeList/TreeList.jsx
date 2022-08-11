import React, {useState} from 'react';
import {JSONTree} from 'react-json-tree';
import ModalImage from '../ModalImage';
import {theme} from '../../utils/const';

import './TreeList.css';

const TreeList = ({ store }) => {
	const [show, setShow] = useState(false)
	const [modalData, setModalData] = useState('')

	const handleShow = () => setShow(true)

	return (
		<>
			<JSONTree
				data={store}
				theme={theme}
				valueRenderer={(raw) => {
					return (
						(typeof raw === 'string' && raw.includes('/')) ?
							<img
								src={raw.replaceAll('"', '')}
								alt=''
								className='tree-image'
								onClick={() => {
									handleShow()
									setModalData(raw.replaceAll('"', ''))
								}}
							/> :
							<em>{ raw }</em>
					)}}
				collectionLimit={15}
				getItemString={(type, data) => {
					if (data.image) return (<span>{data.image.split('/')[1]}</span>)
				}}
			/>
			<ModalImage
				show={show}
				setShow={setShow}
				modalData={modalData}
			/>
		</>
	);
};

export default TreeList;