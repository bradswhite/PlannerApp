import React, { useState } from 'react'

import Select from 'react-select'

import { updateTask, delTask } from './../services/taskService'

const Edit = ({ setRoute, task, tasks, setTasks }) => {
	const [ text, setText ] = useState(task.text)

	const [ card, setCard ] = useState(task.card)

	const cardNames = [
		{ label: 'Monday', value: 0 },
		{ label: 'Tuesday', value: 1 },
		{ label: 'Wednesday', value: 2 },
		{ label: 'Thursday', value: 3 },
		{ label: 'Friday', value: 4 }
	]	
	const cardKeys = { m: 0, t: 1, w: 2, th: 3, f: 4 }

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
				defaultValue={cardNames[cardKeys[card]]}
				onChange={e => setCard([ 'm', 't', 'w', 'th', 'f' ][e.value])}
			/>
			<button onClick={handleEdit}>Edit</button>
			<button onClick={handleDel}>Delete</button>
			<button onClick={() => setRoute('home')}>Cancel</button>
		</div>
	)
}

export default Edit;
