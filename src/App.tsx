import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Register from './Pages/Register';
import Login from './Pages/Login';

const App: React.FC = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Register />} />
						<Route path="/login" element={<Login />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
};

export default App;
