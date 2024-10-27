import React, { useState } from 'react';
import Add from '../../components/nav-svg/Add';
import Minus from '../../components/nav-svg/Minus';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../../store/slices/navigationSlice';
import { removeFromCart } from '../../store/slices/cartSlice';

import { RootState } from '../../store/store';

const Cart: React.FC = () => {
	const cartProducts = useSelector((state: RootState) => state.cart.cartProduct);
	const [operation, setOperation] = useState('add');
	const dispatch = useDispatch();

	const handleButtonPlusMinus = (operation: string) => {
		setOperation(operation);
	};

	const handlePayment = (page: string) => {
		dispatch(setActivePage(page));
	};

	return (
		<div className="pt-20 lg:ps-6 lg:pe-4 lg:flex  lg:gap-4 lg:justify-between" id="cart">
			<div className="bg-white">
				<div
					className="bg-white w-full md:px-24 lg:px-[15px] lg:max-w-[670px] p-[15px] rounded-lg"
					id="cart-items"
				>
					<div className="text-[18px] text-[#071B06] font-semibold pb-4 ">
						Item Lists {cartProducts.length}
					</div>
					{/* image, description and amount div */}
					{cartProducts.map((product, index) => (
						<div className="product-attr border-t-2" key={index}>
							<div
								className="pt-5 flex gap-2 justify-between md:justify-normal md:gap-5 mb-3 "
								id="description"
							>
								<div className="image">
									<img src={product.imageUrl} alt="" />
								</div>

								<div className="sm:w-full lg:max-w-[310px] md:max-w-[500px] middle">
									<p className="text-[18px] text-[#071B06] font-medium product-name">
										{product.productName}
									</p>
									<p className="text-xs text-gray-500 md:leading-5 product-desc">
										{product.description}
									</p>
								</div>
								<p
									id="amount"
									className="text-[#35C12F] text-[18px] text-right w-full max-w-[100px] lg:max-w-[80px]"
								>
									{product.amount}
								</p>
							</div>
							{/* remove item and add/minus quantity */}
							<div className="flex justify-between mb-5" id="operation">
								<p
									className="flex gap-1 text-[#BD0505] svg"
									onClick={() => dispatch(removeFromCart(product))}
								>
									{' '}
									<span>
										<img src="/src/assets/svg-icons/trash.svg" alt="" />
									</span>
									<span className="remove">Remove item</span>
								</p>
								<div className="flex gap-3 items-center">
									<p
										onClick={() => handleButtonPlusMinus('minus')}
										className={`p-1 rounded-md ${
											operation === 'minus' ? 'bg-[#35C12F] ' : 'bg-[#cff1cd]'
										}`}
									>
										<Minus addMinus={operation} />
									</p>
									<p className="text-sm">1</p>
									<p
										onClick={() => handleButtonPlusMinus('add')}
										className={`p-1 rounded-md ${
											operation === 'add' ? 'bg-[#35C12F] ' : 'bg-[#cff1cd]'
										}`}
									>
										<Add addMinus={operation} />
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="bg-white w-full max-w-[340px] p-[15px] rounded-lg h-max">
				<div className="text-[18px] text-[#071B06] font-semibold pb-4 border-b-2">Cart Summary</div>
				<div className="flex justify-between border-b-2 mb-2 py-5">
					<p className="text-[#071B06] text-sm">subtotal</p>
					<p className="text-[#35C12F] text-[18px]">$500</p>
				</div>
				<button
					onClick={() => handlePayment('Checkout')}
					className="w-full py-3 text-white bg-[#35c12f] rounded-lg"
				>
					Proceed with payment
				</button>
			</div>
		</div>
	);
};

export default Cart;
