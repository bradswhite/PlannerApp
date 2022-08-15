import React from 'react'

import Task from './Task'

/**
 * Displays tasks fro assigned card
 * @param {json} tasks
 * @param {method} updateTask
 * @param {method} setRoute
 * @param {method} setEditId
 * @returns {jsx}
 */
const Tasks = ({ tasks, updateTask, setRoute, setEditId }) => {
	return (
		<div>
			{/* Displays each task that belongs in card: */}
			{tasks.map(task => (
				<Task
					task={task}
					updateTask={updateTask}
					setRoute={setRoute}
					setEditId={setEditId}
				/>
			))}
		</div>
	)
}

export default Tasks;
