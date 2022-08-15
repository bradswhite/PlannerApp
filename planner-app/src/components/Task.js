import React, { useState } from 'react'

const Task = ({ task, updateTask, setRoute, setEditId }) => {
	const [ complete, setComplete ] = useState(task.complete)

	const handleToggle = () => {
		updateTask({
			id: task.id,
			text: task.text,
			card: task.card,
			complete: complete === 0 ? 1 : 0
		})
		setComplete(complete === 0 ? 1 : 0)
		console.log(`Toggling task ${task.id}`)
	}

	const handleEdit = () => {
		setEditId(task.id)
		setRoute('edit')
	}

	return (
		<div>
			{task.id}
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
