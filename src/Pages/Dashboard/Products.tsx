import React from 'react';
import ProductInputs from '../../components/ProductInputs';
import { productCard } from '../../dummyData/data';
import Card from '../../components/Card';

const Products: React.FC = () => {
	return (
		<div className="pt-20 lg:ps-6 pe-4">
			<div className="rounded-lg bg-white p-4 mt-6 w-full ">
				<ProductInputs />

				<div className="mt-6 flex flex-wrap justify-around md:justify-normal gap-5 mb-12">
					{productCard.map((product, index) => (
						<Card product={product} key={index} />
					))}
				</div>
				<div className="w-full flex justify-end border-2 mt-6 ">
					<div className="w-max border-2 flex gap-2 items-center">
						<div>
							<img src="/src/assets/svg-icons/arrow-left.svg" alt="" />
						</div>
						<div className="text-sm font-medium text-[#071b06]">Previous</div>
						<div className="text-sm font-medium px-4 py-[7.5px] bg-[#071b06] text-[#C6FAC4] rounded-lg w-max">
							1
						</div>
						<div className="text-sm font-medium px-4 py-[7.5px] text-[#071b06] rounded-lg w-max">
							2
						</div>
						<div className="text-sm font-medium text-[#071b06]">Next</div>
						<div></div>
						<img src="/src/assets/svg-icons/right-arrow.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
