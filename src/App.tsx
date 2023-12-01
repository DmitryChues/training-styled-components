import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Item } from './components/Card';

function App() {
	return (
		<div className="App">
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap" rel="stylesheet"></link>
			<Box>
				<Item active />
				<Item />
			</Box>
		</div>
	);
}

export default App;

const Box = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items:center;
	gap: 20px;
	`