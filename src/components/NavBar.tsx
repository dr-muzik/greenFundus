import React from 'react';

const NavBar: React.FC = () => {
	return (
		<div className="py-2 pe-7 ps-[266px] border-2 border-[#CFD2D8] bg-white flex justify-between items-center">
			<p className="text-2xl font-semibold" style={{ color: '#071B06' }}>
				Overview
			</p>
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
