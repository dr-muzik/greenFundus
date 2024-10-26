import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App: React.FC = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Dashboard />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
};

export default App;
