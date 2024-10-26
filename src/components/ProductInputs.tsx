import React from 'react';
import Filters from './Filters';
import { show, sortedBy1, sortedBy2 } from '../dummyData/data';

const FilterBar: React.FC = () => {
	return (
		<div id="product-inputs" className="flex justify-between flex-wrap">
			<div
				className="p-3 flex border-2 border-[#EBEEF4] rounded-lg gap-3 mb-2 w-full max-w-[335px]"
				id="input-search"
			>
				<img src="/src/assets/svg-icons/search-normal.svg" alt="search" />
				<input type="text" placeholder="Search for products" />
			</div>
			<Filters list={show} filterType={'show'} />
			<Filters list={sortedBy1} filterType={'sort by'} />
			<Filters list={sortedBy2} filterType={'sort by'} />
		</div>
	);
};

export default FilterBar;
