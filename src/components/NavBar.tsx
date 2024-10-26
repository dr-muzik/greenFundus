import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../store/slices/navigationSlice';

const NavBar: React.FC = () => {
	const dispatch = useDispatch();

	const showSideBar = () => {
		dispatch(setIsOpen(true));
		console.log('clicked');
	};

	return (
		<div className="fixed top-0 left-0 right-0 py-2 z-50 pe-7 lg:ps-[266px] border-2 border-[#CFD2D8] bg-white flex justify-between items-center">
			<div className="flex gap-5 ps-5">
				<img
					onClick={showSideBar}
					className="lg:hidden"
					src="/src/assets/svg-icons/breadcrumb.svg"
					alt="breadcrumb"
				/>
				<p className="text-2xl font-semibold" style={{ color: '#071B06' }}>
					Overview
				</p>
			</div>
			<div className="flex gap-2">
				<img width={50} src="/src/assets/svg-icons/cart.svg" alt="cart" />
				<div className="border-l-2 ps-4 ml-4">
					<img width={50} src="/src/assets/images/Frame 12.png" alt="dp" />
				</div>
				<div>
					<p className="text-lg font-semibold" style={{ color: '#071B06' }}>
						Percy Jackson
					</p>
					<p className="text-sm" style={{ color: '#289123' }}>
						Free plan
					</p>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
