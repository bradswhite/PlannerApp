import React, { useState } from 'react'
import Select from 'react-select'

/**
 * Displays form to add task
 * @param {json} tasks
 * @param {json} cards
 * @param {method} setTasks
 * @param {string} cardKey
 * @param {method} addTask
 * @param {method} setRoute
 * @returns {jsx}
 */
const Add = ({ tasks, cards, setTasks, cardKey, addTask, setRoute }) => {
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
		setRoute('home')
	}

	return (
		<div>
			<input value={text} onChange={e => setText(e.currentTarget.value)} />
			<Select
				options={cardNames}
				defaultValue={cardNames[cardKey]}
				onChange={e => setCard(e.value)}
			/>
			<button onClick={handleAdd}>Add</button>
			<button onClick={() => setRoute('home')}>Cancel</button>
		</div>
	)
}

export default Add;
