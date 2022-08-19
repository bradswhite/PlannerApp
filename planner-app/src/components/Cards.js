import React from 'react'

import Card from './Card'

/**
 * Sorts tasks to send and display in cards
 * @param {json} tasks
 * @param {json} cards
 * @param {method} updateTask
 * @param {method} setRoute
 * @param {method} setEditId
 * @param {method} setCardAddKey
 * @returns {jsx}
 */
const Cards = ({ tasks, cards, updateTask }) => {
	const cardTasksList = []
	for (var i in cards) cardTasksList[i] = []

	// Sorts and populates card tasks array with tasks for each card:
	tasks.map(task => cardTasksList[task.card].push(task))

	/* Remove grid and make go off page: */
	return (
		<div className='flex pt-6 px-4'>
			{/* Loops thru card matrix array and displays individual cards: */}
			{cardTasksList.map((cardTasks, i) => (
				<Card
					tasks={cardTasks}
					cardName={cards[i]}
					cardKey={i}
					updateTask={updateTask}
				/>
			))}
		</div>
	)
}

export default Cards;
