import React, { useState } from 'react'

/**
 * Displays task with edit button
 * @param {json} tasks
 * @param {method} updateTask
 * @param {method} setRoute
 * @param {method} setEditId
 * @returns {jsx}
 */
const Task = ({ task, updateTask, setRoute, setEditId }) => {
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
		setEditId(task.id)
		setRoute('edit')
	}

	return (
		<div>
			{/* Commented out task id below because it is irrelavant to users: */}
			{/*task.id*/}
			<input
				type='checkbox'
				checked={complete !== 0}
				onChange={handleToggle}
			/>
			{task.text}
			<button onClick={handleEdit}>Edit</button>
		</div>
	)
}

export default Task;
