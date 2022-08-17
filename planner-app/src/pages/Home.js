import React from 'react'

import Cards from '../components/Cards'

const Home = ({ tasks, cards, updateTask, setRoute, setEditId, setCardAddKey }) => {
	return (
		<Cards
			tasks={tasks}
			cards={cards}
			updateTask={updateTask}
			setRoute={setRoute}
			setEditId={setEditId}
			setCardAddKey={setCardAddKey}
		/>
	)
}

export default Home;
