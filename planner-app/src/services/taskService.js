const url = 'http://localhost:8080/tasks/'

const getTasks = async setTasks => {
	const data = await fetch(url + 'getAll')
	const json = await data.json()
	setTasks(json)
}

const getTask = async id => {
	const data = await fetch(url + id)
	const json = await data.json()
	return json
}

const addTask = async text => {
	const res = await fetch(url + 'add', {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({
			text, complete: 0
		})
	})
	console.log('New item added')
	return parseInt(await res.text())
}

const updateTask = async newTask => {
	await fetch(url + newTask.id, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newTask)
	})
	console.log(`Task ${newTask.id} updated`)
}

const delTask = async id => {
	await fetch(url + id, { method: 'DELETE' })
	console.log(`Task ${id} deleted`)
}

export { getTasks, getTask, addTask, updateTask, delTask };
