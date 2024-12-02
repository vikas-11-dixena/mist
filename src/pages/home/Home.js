import React, { useEffect, useState } from 'react';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Home;
