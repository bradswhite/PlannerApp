import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Displays header and add button
 * @returns {jsx}
 */
const Header = () => (
	<div className='fixed bg-slate-500/20 backdrop-blur-2xl p-4 w-screen shadow-xl'>
		<h1 className='text-3xl font-extrabold drop-shadow-lg text-center text-laurel-green'>Productivity Planner App</h1>
		{/* Add (+) button here: */}
		<Link
			to='/addTask/0'
			className='inset-y-0 right-12 absolute top-4 header-add-btn'
		>
			<ion-icon name="add-outline"></ion-icon>
		</Link>
	</div>
)

export default Header;
