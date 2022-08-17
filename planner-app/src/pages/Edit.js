import React, { useState } from 'react'

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
const Edit = ({ setRoute, cards, task, tasks, setTasks }) => {
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

		setRoute('home')
	}

	const handleDel = () => {
		delTask(task.id)

		setTasks(
			tasks.filter(i => i.id !== task.id)
		)

		setRoute('home')
	}

	return (
		<div>
			<h2>Edit</h2>
			{task.id}
			<input
				value={text}
				onChange={e => setText(e.currentTarget.value)}
			/>
			<Select
				options={cardNames}
				defaultValue={cardNames[card]}
				onChange={e => setCard(e.value)}
			/>
			<button onClick={handleEdit}>Edit</button>
			<button onClick={handleDel}>Delete</button>
			<button onClick={() => setRoute('home')}>Cancel</button>
		</div>
	)
}

export default Edit;
