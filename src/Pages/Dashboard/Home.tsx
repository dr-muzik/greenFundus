import React from 'react';
import TransactionTable from '../../components/TransactionTable';

const Home: React.FC = () => {
	return (
		<div className="pt-20 px-3">
			<div>
				<p className="text-2xl font-semibold" style={{ color: '#071B06' }}>
					Hi Percy
				</p>
				<p className="text-sm">Hello, Welcome Back!</p>
			</div>
			<div className="md:flex gap-7 mb-5">
				<div className="p-7 bg-[#071B06] flex justify-between items-center mt-6 rounded-lg w-full">
					<div className="w-[248px] ">
						<p className="text-[white] text-sm">Let's get started</p>
						<p className="text-[#c6fac4] text-lg font-semibold mt-2 mb-4 leading-5">
							Get the best Insurance for your farm with us
						</p>
						<button className="text-[#c6fac4] text-sm font-medium border-2 border-[#c6fac4] rounded-lg px-2 py-[7.5px]">
							Secure now
						</button>
					</div>
					<div>
						<img src="/src/assets/svg-icons/security.svg" alt="security" />
					</div>
				</div>
				<div className="p-7 bg-[#ECFDEB] flex justify-between items-center mt-6 rounded-lg w-full">
					<div className="w-[248px] ">
						<p className="text-[#071b06] text-sm">Get the best product</p>
						<p className="text-[#35C12F] text-lg font-semibold mt-2 mb-4 leading-5">
							Purchase goo quality farm produce with quality pricing
						</p>
						<button className="text-[#35C12F] text-sm font-medium border-2 border-[#35C12F] rounded-lg px-2 py-[7.5px]">
							Buy Now
						</button>
					</div>
					<div>
						<img src="/src/assets/svg-icons/truck.svg" alt="truck" />
					</div>
				</div>
			</div>
			<div className="bg-white p-2 rounded-lg shadow-lg">
				<TransactionTable />
			</div>
		</div>
	);
};

export default Home;
