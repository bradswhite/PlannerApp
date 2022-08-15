import React, { useState, useEffect } from 'react'

import { getTasks, addTask, updateTask } from './services/taskService'

import Header from './components/Header'
import Cards from './components/Cards'
import AddTask from './components/AddTask'
import Edit from './components/Edit'

/**
 * Displays app with routes: home, add or edit
 * @returns {jsx}
 */
const App = () => {
	const [ tasks, setTasks ] = useState([])

	const [ route, setRoute ] = useState('home')

	const [ editId, setEditId ] = useState(0)

	const [ cardAddKey, setCardAddKey ] = useState()

	// This will run when component mounts (page loads) and populate us with initial tasks:
	useEffect(() => { getTasks(setTasks) }, [])

	return (
		<div>
			<Header />
			{route === 'home' ? (
				<div>
					<Cards
						tasks={tasks}
						updateTask={updateTask}
						setRoute={setRoute}
						setEditId={setEditId}
						setCardAddKey={setCardAddKey}
					/>
				</div>
			) : route === 'add' ? (
				<div>
					<AddTask
						tasks={tasks}
						setTasks={setTasks}
						cardKey={cardAddKey}
						addTask={addTask}
						setRoute={setRoute}
					/>
				</div>
			) : (
				<Edit
					setRoute={setRoute}
					task={tasks.filter(task => task.id === editId)[0]}
					tasks={tasks}
					setTasks={setTasks}
				/>
			)}
		</div>
	)
}

export default App

