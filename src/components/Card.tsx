import React from 'react';
import { IproductCard } from '../interfaces/interface';

const Card: React.FC<IproductCard> = ({ product }) => {
	return (
		<div className="p-[10px] w-full max-w-[230px] border-2 border-[#EBEEF4] rounded-lg">
			<img src={product.imageUrl} alt="" />
			<div className="text-sm text-[#071B06] font-semibold flex justify-between mt-[10px]">
				<p>{product.productName}</p>
				<p className="text-[#35C12F] font-semibold">{product.amount}</p>
			</div>
			<div className="py-[10px] text-xs h-full max-h-[84px]">{product.description}</div>
			<button className="px-[10px] py-2 border-2 text-[#35C12F] text-xs border-[#35C12F] rounded-md">
				Add Cart
			</button>
		</div>
	);
};

export default Card;
