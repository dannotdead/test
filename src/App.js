import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import NavBar from './components/NavBar/NavBar';
import ViewControls from './components/ViewControls';
import SortByControls from './components/SortByControls';
import TreeList from './components/TreeList/TreeList';
import CardList from './components/CardList';
import {getData} from './utils/api';

const App = () => {
	const [store, setStore] = useState([])
	const [disabledItems, setDisabledItems] = useState(0)
	const [sortBy, setSortBy] = useState('default')
	const [showTreeList, setShowTreeList] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getData(setStore, setIsLoading)
	}, [])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('DeletedItems'))
		let tempArr = [...store]
		if (data) {
			setDisabledItems(data.length)
			data.forEach(item => {
				tempArr = tempArr.filter(st => st.image !== item)
			})
		}
		setStore(tempArr)
	},[])

	return (
		<>
			<NavBar />

			<ViewControls
				disabledItems={disabledItems}
				setShowTreeList={setShowTreeList}
				setDisabledItems={setDisabledItems}
				setStore={setStore}
				setSortBy={setSortBy}
				setIsLoading={setIsLoading}
			/>

			<SortByControls
				store={store}
				setStore={setStore}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>

			<Container>
			{isLoading ?
				<Spinner animation='border' className='d-flex m-auto'/>
				: showTreeList ?
					<TreeList
						store={store}
					/>
					 :
					<CardList
						store={store}
						setStore={setStore}
						setDisabledItems={setDisabledItems}
					/>
				}
			</Container>
		</>
	);
}

export default App;
