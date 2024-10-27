import React from 'react';

const Checkout: React.FC = () => {
	return (
		<div>
			<div className="pt-20 lg:ps-6 lg:pe-4 p-4 bg-gray-50 rounded-lg shadow-sm">
				<p className="flex gap-1 mb-5 text-[#071B06] font-medium">
					<img src="/src/assets/svg-icons/arrow-left.svg" alt="" /> Back to Cart
				</p>
				{/* <!-- Delivery Information Section --> */}
				<div className="mb-8 bg-white rounded-lg w-full max-w-[571px] p-4">
					<h2 className="text-lg font-semibold text-[#071B06] mb-4">Delivery Information</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* <!-- Full Name --> */}
						<div>
							<label className="text-sm font-medium text-[#071B06]">Full Name</label>
							<input
								type="text"
								placeholder="Jackie Black"
								className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:border-gray-400 focus:ring-0"
							/>
						</div>
						{/* <!-- Phone Number --> */}
						<div>
							<label className="text-sm font-medium text-[#071B06]">Phone Number</label>
							<input
								type="text"
								placeholder="+234 90000222"
								className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:border-gray-400 focus:ring-0"
							/>
						</div>
						{/* <!-- Email Address --> */}
						<div className="col-span-1 md:col-span-2">
							<label className="text-sm font-medium text-[#071B06]">Email Address</label>
							<input
								type="email"
								placeholder="JackieBlack@gmail.com"
								className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:border-gray-400 focus:ring-0"
							/>
						</div>
						{/* <!-- State --> */}
						<div>
							<label className="text-sm font-medium text-[#071B06]">State</label>
							<input
								type="text"
								placeholder="Enugu"
								className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:border-gray-400 focus:ring-0"
							/>
						</div>
						{/* <!-- LGA --> */}
						<div>
							<label className="text-sm font-medium text-[#071B06]">LGA</label>
							<input
								type="text"
								placeholder="Enugu"
								className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:border-gray-400 focus:ring-0"
							/>
						</div>
						{/* <!-- House Address --> */}
						<div className="col-span-1 md:col-span-2">
							<label className="text-sm font-medium text-[#071B06]">House Address</label>
							<input
								type="text"
								placeholder="9 Areana street."
								className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:border-gray-400 focus:ring-0"
							/>
						</div>
					</div>
				</div>

				{/* <!-- Payment Method Section --> */}
				<div className="mb-8 bg-white rounded-lg w-full max-w-[571px] p-4">
					<h2 className="text-lg font-semibold text-gray-900 mb-4">Select Payment Method</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* <!-- Credit/Debit Card --> */}
						<div className="border border-gray-300 rounded-lg p-4 flex items-center gap-2 cursor-pointer hover:bg-gray-100">
							<img src="/src/assets/svg-icons/card.svg" alt="Card Icon" className="w-5 h-5" />
							<span className="text-sm font-medium text-gray-700">Credit / Debit Card</span>
						</div>
						{/* <!-- Bank Transfer --> */}
						<div className="border border-gray-300 rounded-lg p-4 flex items-center gap-2 cursor-pointer hover:bg-gray-100">
							<img src="/src/assets/svg-icons/share.svg" alt="Bank Icon" className="w-5 h-5" />
							<span className="text-sm font-medium text-gray-700">Bank Transfer</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
