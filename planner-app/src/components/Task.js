import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Displays task with edit button
 * @param {json} tasks
 * @param {method} updateTask
 * @param {method} setRoute
 * @param {method} setEditId
 * @returns {jsx}
 */
const Task = ({ task, index, updateTask }) => {
	const [ complete, setComplete ] = useState(task.complete)

	/**
	 * Toggles a task's complete value when a checkbox is switched
	 */
	const handleToggle = () => {
		updateTask({
			id: task.id, text: task.text, card: task.card,
			complete: complete === 0 ? 1 : 0
		})
		setComplete(complete === 0 ? 1 : 0)
		console.log(`Toggling task ${task.id}`)
	}

	return (
		<div className='bg-slate-100 shadow-md rounded-md p-4 flow-root'>
			<div className='row-span-1 flex float-left'>
				<input
					type='checkbox'
					checked={complete !== 0}
					onChange={handleToggle}
					className='form-check-input appearance-none h-4 w-4 border mt-1.5 border-gray-400 rounded-sm bg-gray-200 checked:bg-independence checked:border-independence focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain cursor-pointer'
				/>
				<p className={(complete ? 'line-through ' : '') + `mx-4 text-md text-independence`}>{task.text}</p>
			</div>
			<Link className='float-right' to={`/edit/${task.id}`}>
				<ion-icon name="ellipsis-horizontal-outline"></ion-icon>
			</Link>
		</div>
	)
}

export default Task;
