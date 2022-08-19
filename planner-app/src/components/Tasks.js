import React from 'react'

import Task from './Task'

/**
 * Displays tasks fro assigned card
 * @param {json} tasks
 * @returns {jsx}
 */
const Tasks = ({ tasks }) => {
	return (
		<div className='grid grid-row-flow gap-2 py-2'>
			{/* Displays each task that belongs in card: */}
			{tasks.map((task, index) => (
				<Task
					task={task}
					index={index}
				/>
			))}
		</div>
	)
}

export default Tasks;
