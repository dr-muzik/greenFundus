import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen, setActivePage } from '../store/slices/navigationSlice';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/slices/userSlice';

const NavBar: React.FC = () => {
	const dispatch = useDispatch();
	const activePage = useSelector((state: RootState) => state.navigation.activePage);
	const productInCart = useSelector((state: RootState) => state.cart.cartProduct);
	const user = useSelector((state: RootState) => state.user.user);
	const navigate = useNavigate();
	const showSideBar = () => {
		dispatch(setIsOpen(true));
		console.log('clicked');
	};

	useEffect(() => {
		const storedUsername = localStorage.getItem('userDetails');
		if (storedUsername) {
			dispatch(setUser(JSON.parse(storedUsername)));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const setCartPage = (page: string) => {
		dispatch(setActivePage(page));
		navigate('/dashboard/Products/cart');
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
						onClick={() => setCartPage('Cart')}
						src="/src/assets/svg-icons/cart.svg"
						alt="cart"
						className="cursor-pointer"
					/>
					{productInCart.length > 0 && (
						<div className="absolute top-[-5px] right-[-5px] text-sm bg-[#35C12F] text-white font-bold rounded-[70%] py-[1px] px-[8px]">
							{productInCart.length}
						</div>
					)}
				</div>
				<div className="border-l-2 ps-4 ml-4 hidden sm:block">
					<img width={50} src="/src/assets/images/Frame 12.png" alt="dp" />
				</div>
				<div className="hidden sm:block">
					<p className="text-lg font-semibold" style={{ color: '#071B06' }}>
						{user.name}
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
