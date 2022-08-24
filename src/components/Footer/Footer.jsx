import React from 'react';
import './Footer.css';
import {Container} from 'react-bootstrap';

const Footer = () => {
	return (
		<div className='footer'>
			<Container className='footer-container'>
				<div>
					Footer
				</div>
				<div>
					<i>Created by <a href='https://github.com/dannotdead'>dannotdead</a></i>
				</div>
			</Container>
		</div>
	);
};

export default Footer;