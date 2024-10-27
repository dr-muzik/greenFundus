import React, { useEffect, useState } from 'react';
import CommunityNavIcon from './nav-svg/CommunityNavIcon';
import HomeNavIcon from './nav-svg/HomeNavIcon';
import InsuranceNavIcon from './nav-svg/InsuranceNavIcon';
import PaymentNavIcon from './nav-svg/PaymentNavIcon';
import ProductsNavIcon from './nav-svg/ProductsNavIcon';
import SettingNavIcon from './nav-svg/SettingNavIcon';
import SecurityNavIcon from './nav-svg/SecurityNavIcon';
import { useDispatch } from 'react-redux';
import { setActivePage, setIsOpen } from '../store/slices/navigationSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const SideBar: React.FC = () => {
	const isOpen = useSelector((state: RootState) => state.navigation.isOpen);
	const dispatch = useDispatch();
	const [activeLink, setActiveLink] = useState('Home');
	// const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);

	const setLinkActive = (link: string) => {
		setActiveLink(link);
		dispatch(setActivePage(link));
		dispatch(setIsOpen(false));
	};
	return (
		<aside
			className={`lg:fixed lg:top-0 lg:left-0 w-[242px] h-screen border-2 z-20 border-[#CFD2D8] bg-white transform ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} transition-transform duration-[1000ms] ease-in-out z-40 absolute top-0 lg:translate-x-0 `}
		>
			<div className="mb-3 last:sm:mb-10 mt-7 ps-2">
				<img src="/src/assets/svg-icons/logo.svg" alt="logo" style={{ fill: 'red' }} />
			</div>
			<div className="ps-4 mt-7 flex gap-3 sm:hidden mb-5">
				<div className="">
					<img width={40} src="/src/assets/images/Frame 12.png" alt="dp" />
				</div>
				<div className=" ">
					<p className="text-lg font-semibold" style={{ color: '#071B06' }}>
						Percy Jackson
					</p>
					<p className="text-sm" style={{ color: '#289123' }}>
						Free plan
					</p>
				</div>
			</div>
			<nav className="px-4 list-none">
				{navLinks.map((links, index) => (
					<li
						key={index}
						className=" p-3 rounded-lg flex gap-2 font-medium"
						style={{
							backgroundColor: activeLink === links ? '#071B06' : '',
							color: activeLink === links ? '#C6FAC4' : '#758193',
							cursor: 'pointer',
						}}
						onClick={() => setLinkActive(links)}
					>
						{' '}
						<span>
							{links === 'Home' ? (
								<HomeNavIcon activeLink={activeLink} />
							) : links === 'Products' ? (
								<ProductsNavIcon activeLink={activeLink} />
							) : links === 'Insurance' ? (
								<InsuranceNavIcon activeLink={activeLink} />
							) : links === 'Payments' ? (
								<PaymentNavIcon activeLink={activeLink} />
							) : (
								<CommunityNavIcon activeLink={activeLink} />
							)}
						</span>
						{links}
					</li>
				))}
				<p className="sm:pt-10 pt-3" style={{ color: '#758193' }}>
					----------------------------
				</p>
			</nav>
			<nav className="px-4 list-none sm:mt-10 mt-3">
				{navLinksTwo.map((links, index) => (
					<li
						key={index}
						className=" p-3 rounded-lg flex gap-2 font-medium"
						style={{
							backgroundColor: activeLink === links ? '#071B06' : '',
							color: activeLink === links ? '#C6FAC4' : '#758193',
							cursor: 'pointer',
						}}
						onClick={() => setLinkActive(links)}
					>
						{' '}
						<span>
							{links === 'Settings' ? (
								<SettingNavIcon activeLink={activeLink} />
							) : (
								<SecurityNavIcon activeLink={activeLink} />
							)}
						</span>
						{links}
					</li>
				))}
			</nav>
		</aside>
	);
};

export default SideBar;

// eslint-disable-next-line react-refresh/only-export-components
export const navLinks = ['Home', 'Products', 'Insurance', 'Payments', 'Community'];

// eslint-disable-next-line react-refresh/only-export-components
export const navLinksTwo = ['Settings', 'Security'];
