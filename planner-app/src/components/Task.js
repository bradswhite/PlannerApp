import React, { useState } from 'react'

/**
 * Displays task with edit button
 * @param {json} tasks
 * @param {method} updateTask
 * @param {method} setRoute
 * @param {method} setEditId
 * @returns {jsx}
 */
const Task = ({ task, index, updateTask, setRoute, setEditId }) => {
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

	/** 
	 * Redirects to edit task route with present task as default
	 */
	const handleEdit = () => {
		setEditId(index)
		setRoute('edit')
	}

	return (
		<div className='row-span-1 bg-slate-100 shadow-md rounded-md p-4' onClick={handleEdit}>
			{/* Commented out task id below because it is irrelavant to users: */}
			{/*task.id*/}
			<input
				type='checkbox'
				checked={complete !== 0}
				onChange={handleToggle}
		        className='form-check-input appearance-none h-4 w-4 border mt-1.5 border-gray-400 rounded-sm bg-gray-200 checked:bg-independence checked:border-independence focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain cursor-pointer'
			/>
			{task.text}
		{/*<button onClick={handleEdit}>Edit</button>*/}
		{/*	<div className='bg-dark-sea-green rounded-full w-5 h-5'></div>*/}
		</div>
	)
}

export default Task;
