import React, { useState } from 'react';
import CommunityNavIcon from './nav-svg/CommunityNavIcon';
import HomeNavIcon from './nav-svg/HomeNavIcon';
import InsuranceNavIcon from './nav-svg/InsuranceNavIcon';
import PaymentNavIcon from './nav-svg/PaymentNavIcon';
import ProductsNavIcon from './nav-svg/ProductsNavIcon';
import SettingNavIcon from './nav-svg/SettingNavIcon';
import SecurityNavIcon from './nav-svg/SecurityNavIcon';

const SideBar: React.FC = () => {
	const [activeLink, setActiveLink] = useState('');
	const setLinkActive = (link: string) => {
		setActiveLink(link);
	};
	return (
		<>
			<div className="mb-10 mt-7 ps-2">
				<img src="/src/assets/svg-icons/logo.svg" alt="logo" style={{ fill: 'red' }} />
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
				<p className="pt-10" style={{ color: '#758193' }}>
					----------------------------
				</p>
			</nav>
			<nav className="px-4 list-none mt-10">
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
		</>
	);
};

export default SideBar;

// eslint-disable-next-line react-refresh/only-export-components
export const navLinks = ['Home', 'Products', 'Insurance', 'Payments', 'Community'];

// eslint-disable-next-line react-refresh/only-export-components
export const navLinksTwo = ['Settings', 'Security'];
