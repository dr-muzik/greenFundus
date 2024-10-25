import React from 'react';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

const Home: React.FC = () => {
	return (
		<div>
			<NavBar />
			<div className="w-[242px] h-screen border-2 border-[#CFD2D8] bg-white relative top-[-70px]">
				<SideBar />
			</div>
		</div>
	);
};

export default Home;
