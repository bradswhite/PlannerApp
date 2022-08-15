import React from 'react'

import Tasks from './Tasks'

/**
 * Displays card to house tasks and add task button
 * @param {json} tasks
 * @param {string} cardName
 * @param {sttring} cardKey
 * @param {method} updateTask
 * @param {method} setRoute
 * @param {method} setEditId
 * @param {method} setCardAddKey
 * @returns {jsx}
 */
const Card = ({ tasks, cardName, cardKey, updateTask, setRoute, setEditId, setCardAddKey }) => {
	/**
	 * Redirects to add task route with present card as default
	 */
	const handleAdd = () => {
		setCardAddKey(cardKey)
		setRoute('add')
	}

	return (
		<div>
			<h3>{cardName}</h3>
			<div>
				{/* Displays tasks for card: */}
				<Tasks
					tasks={tasks}
					updateTask={updateTask}
					setRoute={setRoute}
					setEditId={setEditId}
				/>
				<button onClick={handleAdd}>
					Add Task
				</button>
			</div>
		</div>
	)
}

export default Card;
