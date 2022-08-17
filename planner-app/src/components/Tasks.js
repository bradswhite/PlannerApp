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
		<div className='grid grid-row-flow gap-2 py-2'>
			{/* Displays each task that belongs in card: */}
			{tasks.map((task, index) => (
				<Task
					task={task}
					index={index}
					updateTask={updateTask}
					setRoute={setRoute}
					setEditId={setEditId}
				/>
			))}
		</div>
	)
}

export default Tasks;
