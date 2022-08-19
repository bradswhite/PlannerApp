import React, { useState, useEffect } from 'react'

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

// Service rest api functions:
import { getTasks } from './services/taskService'
import { getCards } from './services/cardService'

import Home from './pages/Home'
import AddTask from './pages/AddTask'
import Edit from './pages/Edit'

import Header from './components/Header'

/**
 * Displays app with routes: home, addTask or edit
 * @returns {jsx}
 */
const App = () => {
	const [ tasks, setTasks ] = useState([])
	const [ cards, setCards ] = useState([])

	// This will run when component mounts (page loads) and populate us with initial tasks and cards:
	useEffect(() => {
		getTasks(setTasks)
		getCards(setCards)
	}, [])

	/* Colors: timberwolf, laural-green, dark-sea-green, battleship-grey, independence */
	return (
		<Router>
			<div className='font-sans h-screen w-screen'>
				<Header />
				<div className='pt-20'>
					<Routes>
						<Route
							path='/'
							exact
							element={<Home
								tasks={tasks}
								cards={cards}
							/>}
						/>
						<Route
							path='/addTask/:key'
							element={<AddTask
								tasks={tasks}
								cards={cards}
								setTasks={setTasks}
							/>}
						/>
						<Route
							path='/edit/:id'
							element={<Edit
								cards={cards}
								tasks={tasks}
								setTasks={setTasks}
							/>}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App;
