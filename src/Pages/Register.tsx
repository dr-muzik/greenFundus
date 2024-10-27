import React, { ChangeEvent, useState } from 'react';
import { Iform } from '../interfaces/interface';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { successToast } from '../utils/toast';

const Register: React.FC = () => {
	// const [error] = useState<Iform | null>(null);
	const [formInput, setFormInput] = useState<Iform>({ name: '', email: '', password: '' });
	const dispatch = useDispatch();

	const formHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		// event.target.name === 'email' ? setError({ ...error, email: 'Invalid Email' }) : setError(null);

		setFormInput((prevState) => ({ ...prevState, [name]: value }));
	};
	const navigate = useNavigate();

	const formSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		localStorage.setItem('userDetails', JSON.stringify(formInput));
		console.log('form: ', formInput);
		dispatch(setUser(formInput));
		navigate('/dashboard/Home');
		successToast('successfully Registered!');
	};

	return (
		<div
			className="bg-black h-screen w-full p-4 lg:p-0 flex justify-center overflow-y-hidden items-center"
			id="register"
		>
			<div className="hidden lg:block w-[50%]  bg-cover">
				<img
					className="w-full h-full object-contain"
					src="/src/assets/images/register.png"
					alt="signup_image"
				/>
			</div>
			<div className="lg:w-[50%] lg:px-[70px] py-[10px] flex flex-col gap-9  items-center">
				<div className="w-full max-w-[442px]">
					<h1 className=" text-white font-semibold text-3xl md:text-[40px] mb-2 tracking-[-0.04em]">
						Welcome to <span style={{ color: '#32A22E' }}>GreenFundus!</span>
					</h1>
					<p className="text-[#D0D0D0] text-xs md:text-sm">
						Your smart coverage for sustainable farming today
					</p>
				</div>
				<form action="" onSubmit={formSubmit} className=" w-full max-w-[442px]">
					<div className="mb-4">
						<label htmlFor="username" className="text-sm block mb-2 text-white">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							id="username"
							placeholder="Name"
							onChange={formHandler}
							className="py-[16px] px-[14px] w-full rounded-lg bg-inherit"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="username" className="text-sm block mb-2 text-white bg-inherit">
							Email Address
						</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Email Address"
							onChange={formHandler}
							className="py-[16px] px-[14px] w-full rounded-lg bg-inherit"
						/>
					</div>
					<div className="mb-12">
						<label htmlFor="username" className="text-sm block mb-2 text-white">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							onChange={formHandler}
							className="py-[16px] px-[14px] w-full rounded-lg bg-inherit"
						/>
					</div>
					<button className="mb-6 text-center p-4 w-full rounded-md text-white">
						Proceed with verification
					</button>
					<div className="w-full text-center">
						<p className="text-white text-sm">
							Already have an account?{' '}
							<Link to="/login" style={{ color: '#32A22E', cursor: 'pointer' }}>
								Sign in
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
