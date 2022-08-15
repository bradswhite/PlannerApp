import React from 'react'

import Card from './Card'

/**
 * Sorts tasks to send and display in cards
 * @param {json} tasks
 * @param {method} updateTask
 * @param {method} setRoute
 * @param {method} setEditId
 * @param {method} setCardAddKey
 * @returns {jsx}
 */
const Cards = ({ tasks, updateTask, setRoute, setEditId, setCardAddKey }) => {
	const cardNames = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
	const cardKeys = { m: 0, t: 1, w: 2, th: 3, f: 4 }
	
	const cardTaskMatrix = [ [], [], [], [], [] ]

	// Sorts and populates card matrix array with tasks:
	tasks.map(task => cardTaskMatrix[cardKeys[task.card]].push(task))

	return (
		<div>
			{/* Loops thru card matrix array and displays individual cards: */}
			{cardTaskMatrix.map((cardTasks, i) => (
				<Card
					tasks={cardTasks}
					cardName={cardNames[i]}
					cardKey={[ 'm', 't', 'w', 'th', 'f' ][i]}
					updateTask={updateTask}
					setRoute={setRoute}
					setEditId={setEditId}
					setCardAddKey={setCardAddKey}
				/>
			))}
		</div>
	)
}

export default Cards;
