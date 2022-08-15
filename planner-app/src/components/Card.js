import React from 'react'

import Tasks from './Tasks'

const Card = ({ tasks, cardName, cardKey, updateTask, setRoute, setEditId, setCardAddKey }) => {
	const handleAdd = () => {
		setCardAddKey(cardKey)
		setRoute('add')
	}

	return (
		<div>
			<h3>{cardName}</h3>
			<div>
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
