import React, { useState } from 'react';
import ProductInputs from '../../components/ProductInputs';
import { productCard } from '../../dummyData/data';
import Card from '../../components/Card';
import ProductModal from '../../components/ProductModal';

const Products: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const handleCurrentPage = (page: number) => {
		setCurrentPage(page);
	};
	const handlePageNumber = (value: string) => {
		if (value === 'Next' && currentPage !== productCard.length - 4) setCurrentPage(currentPage + 1);
		else if (value === 'Previous' && currentPage > 1) setCurrentPage(currentPage - 1);
	};

	return (
		<div className="pt-20 lg:ps-6 pe-4">
			<div className="rounded-lg bg-white p-4 mt-6 w-full ">
				<ProductInputs />

				<div className="mt-6 flex flex-wrap justify-around md:justify-normal gap-5 mb-12">
					{productCard.map((product, index) => (
						<Card product={product} key={index} />
					))}
				</div>
				<div className="w-full flex justify-end  mt-6 ">
					<div className="w-max  flex gap-2 items-center">
						<div
							className="text-sm font-medium cursor-pointer text-[#071b06] flex gap-2 items-center hover:bg-[#dafed9] py-2 px-2 rounded-lg"
							onClick={() => handlePageNumber('Previous')}
						>
							<img src="/src/assets/svg-icons/arrow-left.svg" alt="" />
							Previous
						</div>
						{Array.from({ length: productCard.length - 4 }, (_, index) => (
							<div
								key={index + 1}
								onClick={() => handleCurrentPage(index + 1)}
								className={`cursor-pointer text-sm font-medium px-4 py-[7.5px] hover:bg-[#dafed9] ${
									currentPage === index + 1
										? 'bg-[#071b06] text-[#C6FAC4] hover:bg-[#071b06] '
										: 'text-[#071b06]'
								} rounded-lg w-max`}
							>
								{index + 1}
							</div>
						))}

						<div
							className="cursor-pointer text-sm font-medium text-[#071b06] flex gap-2 items-center hover:bg-[#dafed9] py-2 px-2 rounded-lg"
							onClick={() => handlePageNumber('Next')}
						>
							Next
							<img src="/src/assets/svg-icons/right-arrow.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
			<ProductModal />
		</div>
	);
};

export default Products;
