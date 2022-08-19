import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Select from 'react-select'

// Service rest api functions:
import { addTask } from './../services/taskService'

/**
 * Displays form to add task
 * @param {json} tasks
 * @param {json} cards
 * @param {method} setTasks
 * @returns {jsx}
 */
const Add = ({ tasks, cards, setTasks }) => {
	const { key } = useParams()
	const cardKey = parseInt(key)

	const [ text, setText ] = useState('')

	const [ card, setCard ] = useState(cardKey)
	
	const cardNames = []
	for (var i in cards)
		cardNames[i] = { label: cards[i], value: i }
	
	/**
	 * Calls method to add task to db, local copy and return to home route
	 */
	const handleAdd = async () => {
		const id = await addTask(text, card)
		setTasks([
			...tasks,
			{ id, text, card, complete: 0 }
		])
	}

	return (
		<div className='grid place-items-center'>
			<div className='self-center bg-slate-300 shadow-lg rounded p-12 my-20'>
				<h2 className='text-md font-bold py-2 pl-2 '>Add Task</h2>
				<input
					value={text}
					className='my-2 form-control block w-full px-3 py-1.5 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
					placeholder='Enter task...'
					onChange={e => setText(e.currentTarget.value)}
				/>
				<Select
					options={cardNames}
					defaultValue={cardNames[cardKey]}
					onChange={e => setCard(e.value)}
				/>
				<div className='grid grid-cols-2 place-items-center py-6'>
					<Link
						to='/'
						onClick={handleAdd}
					>
						<ion-icon name="create-outline"></ion-icon>
					</Link>
					<Link to='/'>
						<ion-icon name="close-outline"></ion-icon>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Add;
