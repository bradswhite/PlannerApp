import React from 'react'

import Card from './Card'

const Cards = ({ tasks, updateTask, setRoute, setEditId, setCardAddKey }) => {
	const cardNames = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
	const cardKeys = { m: 0, t: 1, w: 2, th: 3, f: 4 }
	
	const cardTaskMatrix = [ [], [], [], [], [] ]

	tasks.map(task => cardTaskMatrix[cardKeys[task.card]].push(task))

	return (
		<div>
			{cardTaskMatrix.map((cardTasks, i) => <Card
				tasks={cardTasks}
				cardName={cardNames[i]}
				cardKey={[ 'm', 't', 'w', 'th', 'f' ][i]}
				updateTask={updateTask}
				setRoute={setRoute}
				setEditId={setEditId}
				setCardAddKey={setCardAddKey}
			/>)}
		</div>
	)
}

export default Cards;
