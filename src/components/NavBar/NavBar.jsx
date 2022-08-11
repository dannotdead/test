import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.css';

const NavBar = () => {
	return (
		<Navbar bg='dark' variant='dark' sticky='top' className='nav-bar' >
			<Container>
				<Navbar.Brand>
					Test Challenge
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default NavBar;