import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import Select from 'react-select'

import { updateTask, delTask } from './../services/taskService'

/**
 * Displays form to edit task
 * @param {json} cards
 * @param {json} task
 * @param {json} tasks
 * @param {method} setTasks
 * @param {method} setRoute
 * @returns {jsx}
 */
const Edit = ({ setRoute, cards, tasks, setTasks }) => {
	const { id } = useParams()
	const taskId = parseInt(id)
	const task = tasks.filter(task => task.id === taskId)[0]

	const [ text, setText ] = useState(task.text)

	const [ card, setCard ] = useState(task.card)

	const cardNames = []
	for (var i in cards)
		cardNames[i] = { label: cards[i], value: i }

	const handleEdit = () => {
		updateTask({
			id: task.id,
			text,
			card,
			complete: task.complete
		})

		setTasks(
			tasks.map(i => i.id === task.id ?
				{
					id: task.id,
					text,
					card,
					complete: task.complete
				} : i
			)
		)
	}

	const handleDel = () => {
		delTask(task.id)

		setTasks(
			tasks.filter(i => i.id !== task.id)
		)
	}

	return (
		<div className='grid place-items-center'>
			<div className='self-center bg-slate-300 shadow-lg rounded p-12 my-20'>
				<h2 className='text-md font-bold py-2 pl-2 '>Edit Task</h2>
				<input
					value={text}
					className='my-2 form-control block w-full px-3 py-1.5 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
					placeholder='Enter task...'
					onChange={e => setText(e.currentTarget.value)}
				/>
				<Select
					options={cardNames}
					defaultValue={cardNames[card]}
					onChange={e => setCard(e.value)}
				/>
				<div className='grid grid-cols-3 place-items-center py-6'>
					<Link
						to='/'
						onClick={handleEdit}
					>	
						<ion-icon name="create-outline"></ion-icon>
					</Link>
					<Link
						to='/'
						onClick={handleDel}
					>
						<ion-icon name="trash-outline"></ion-icon>
					</Link>
					<Link to='/'>
						<ion-icon name="close-outline"></ion-icon>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Edit;
