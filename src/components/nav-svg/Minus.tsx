import React from 'react';
import { IproductQuantity } from '../../interfaces/interface';

const Minus: React.FC<IproductQuantity> = ({ addMinus }) => {
	return (
		<div>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5 10H15"
					stroke={addMinus === 'minus' ? '#FFF' : '#35C12F'}
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	);
};

export default Minus;
