import React from 'react'

import Cards from '../components/Cards'

/**
 * Displays home route
 * @returns {jsx}
 */
const Home = ({ tasks, cards, updateTask }) => {
	return (
		<Cards
			tasks={tasks}
			cards={cards}
		/>
	)
}

export default Home;
