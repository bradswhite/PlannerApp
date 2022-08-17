import React, { useState, useEffect } from 'react'

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

// Service rest api functions:
import { getTasks, addTask, updateTask } from './services/taskService'
import { getCards } from './services/cardService'

import Home from './pages/Home'
import AddTask from './pages/AddTask'
import Edit from './pages/Edit'

import Header from './components/Header'

/**
 * Displays app with routes: home, add or edit
 * @returns {jsx}
 */
const App = () => {
	const [ tasks, setTasks ] = useState([])

	const [ cards, setCards ] = useState([])

	const [ route, setRoute ] = useState('home')

	const [ editId, setEditId ] = useState(0)

	const [ cardAddKey, setCardAddKey ] = useState()

	// This will run when component mounts (page loads) and populate us with initial tasks and cards:
	useEffect(() => {
		getTasks(setTasks)
		getCards(setCards)
	}, [])

	/* Colors: timberwolf, laural-green, dark-sea-green, battleship-grey, independence */
	return (
		<div className='font-sans h-screen w-screen'>
			<Header setRoute={setRoute} />
			<div className='pt-20'>
				<Router>
					<Routes>
						<Route
							path='/'
							exact
							index
							element={<Home
								tasks={tasks}
								cards={cards}
								updateTask={updateTask}
								setRoute={setRoute}
								setEditId={setEditId}
								setCardAddKey={setCardAddKey}
							/>}
						/>
						<Route
							path='/addTask'
							element={<AddTask
								tasks={tasks}
								cards={cards}
								setTasks={setTasks}
								cardKey={cardAddKey}
								addTask={addTask}
								setRoute={setRoute}
							/>}
						/>
						<Route
							path='/edit'
							element={<Edit
								setRoute={setRoute}
								cards={cards}
								task={tasks[editId]}
								tasks={tasks}
								setTasks={setTasks}
							/>}
						/>
					</Routes>
				</Router>
				{/* Remove these: */}
				<ion-icon name="add-outline"></ion-icon>
				<ion-icon name="close-outline"></ion-icon>
				<ion-icon name="create-outline"></ion-icon>
				<ion-icon name="ellipsis-horizontal-outline"></ion-icon>
				<ion-icon name="trash-outline"></ion-icon>
			</div>
		</div>
	)
}

export default App;
