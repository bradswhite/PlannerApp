import React from 'react'

import Task from './Task'

const Tasks = ({ tasks, updateTask, setRoute, setEditId }) => {
	return (
		<div>
			{tasks.map(task => <Task
				task={task}
				updateTask={updateTask}
				setRoute={setRoute}
				setEditId={setEditId}
			/>)}
		</div>
	)
}

export default Tasks;
