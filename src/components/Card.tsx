import React from 'react';
import { ICard, IproductCard } from '../interfaces/interface';
import { useDispatch } from 'react-redux';
import { setIsModalOpen, setModalProduct } from '../store/slices/modalSlice';
import { addToCart } from '../store/slices/cartSlice';

const Card: React.FC<IproductCard> = ({ product }) => {
	const dispatch = useDispatch();

	const handleOpenModal = (product: ICard) => {
		dispatch(setIsModalOpen(true));
		dispatch(setModalProduct(product));
	};

	const handleAddToCart = (product: ICard) => {
		console.log(product);
		dispatch(addToCart(product));
	};

	return (
		<div className="p-[10px] w-full max-w-[230px] border-2 border-[#EBEEF4] rounded-lg relative">
			<div onClick={() => handleOpenModal(product)} className="pb-9">
				<img src={product.imageUrl} alt="" />
				<div className="text-sm text-[#071B06] font-semibold flex justify-between mt-[10px]">
					<p>{product.productName}</p>
					<p className="text-[#35C12F] font-semibold">{product.amount}</p>
				</div>
				<div className="py-[10px] text-xs h-full max-h-[84px]">{product.description}</div>
			</div>
			<button
				onClick={() => handleAddToCart(product)}
				className="px-[10px] py-2 border-2 text-[#35C12F] text-xs border-[#35C12F] rounded-md bg-white absolute z-10 bottom-[3%] left-[5%]"
			>
				Add Cart
			</button>
		</div>
	);
};

export default Card;
