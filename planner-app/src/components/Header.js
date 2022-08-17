import React from 'react'

const Header = ({ setRoute }) => (
	<div className='fixed bg-slate-500/20 backdrop-blur-2xl p-4 w-screen shadow-xl'>
		<h1 className='text-3xl font-extrabold drop-shadow-lg text-center text-laurel-green'>Productivity Planner App</h1>
		{/* Add (+) button here: */}
		<button
			className='inset-y-0 right-12 absolute header-add-btn'
			onClick={() => setRoute('add')}
		>
			<ion-icon name="add-outline"></ion-icon>
		</button>
	</div>
)

export default Header;
