import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen, setActivePage } from '../store/slices/navigationSlice';
import { RootState } from '../store/store';

const NavBar: React.FC = () => {
	const dispatch = useDispatch();
	const activePage = useSelector((state: RootState) => state.navigation.activePage);
	const productInCart = useSelector((state: RootState) => state.cart.cartProduct);

	const showSideBar = () => {
		dispatch(setIsOpen(true));
		console.log('clicked');
	};

	const setCartPage = (page: string) => {
		dispatch(setActivePage(page));
	};

	return (
		<div className="fixed top-0 left-0 right-0 py-2 z-20 pe-7 lg:ps-[266px] border-2 border-[#CFD2D8] bg-white flex justify-between items-center">
			<div className="flex gap-5 ps-5">
				<img
					onClick={showSideBar}
					className="lg:hidden"
					src="/src/assets/svg-icons/breadcrumb.svg"
					alt="breadcrumb"
				/>
				<p className="text-2xl font-semibold" style={{ color: '#071B06' }}>
					{activePage === 'Home' ? 'Overview' : activePage}
				</p>
			</div>
			<div className="flex gap-2">
				<div className="relative">
					<img
						width={50}
						onClick={() => setCartPage('Carts')}
						src="/src/assets/svg-icons/cart.svg"
						alt="cart"
						className="cursor-pointer"
					/>
					{productInCart.length > 0 && (
						<div className="absolute top-[-5px] right-[-5px] text-sm bg-slate-500 text-white font-bold rounded-[50%] p-[2px] px-[6px]">
							{productInCart.length}
						</div>
					)}
				</div>
				<div className="border-l-2 ps-4 ml-4 hidden sm:block">
					<img width={50} src="/src/assets/images/Frame 12.png" alt="dp" />
				</div>
				<div className="hidden sm:block">
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
