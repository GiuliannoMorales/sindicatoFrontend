import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import EstadoCuenta from './pages/EstadoCuenta';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/cuenta/estado" element={<EstadoCuenta />} />
			</Routes>
		</Router>
	);
}

export default App;
