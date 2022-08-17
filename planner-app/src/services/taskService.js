/**
 * Service functions to interact with tasks in db
 * @author Brad White
 * @data 8-22
 */

// Base rest api url:
const url = 'http://localhost:8080/tasks/'

/**
 * Fetches data from rest api and puts it into the `tasks` state
 * @async
 * @param {function} setTasks - set `tasks` state
 * @returns {void}
 */
const getTasks = async setTasks => {
	const data = await fetch(url + 'getAll')
	const json = await data.json()
	setTasks(json)
}

/**
 * Fetches
 * @async
 * @param {id} id - id of task to find
 * @returns {json} - task data
 */
const getTask = async id => {
	const data = await fetch(url + id)
	const json = await data.json()
	return json
}

/**
 * Adds task to db
 * @async
 * @param {string} text - text of new task
 * @param {string} card - card of new task
 * @returns {number} - id of new task
 */
const addTask = async (text, card) => {
	const res = await fetch(url + 'add', {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({
			text, card, complete: 0
		})
	})
	console.log('New item added')
	return parseInt(await res.text())
}

/**
 * Updates task in db
 * @async
 * @param {json} newTask - task to replace existing task
 * @returns {void}
 */
const updateTask = async newTask => {
	await fetch(url + newTask.id, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newTask)
	})
	console.log(`Task ${newTask.id} updated`)
}

/**
 * Delete task in db
 * @async
 * @param {int} id - id of task to delete
 * @returns {void}
 */
const delTask = async id => {
	await fetch(url + id, { method: 'DELETE' })
	console.log(`Task ${id} deleted`)
}

// Exporting service functions:
export { getTasks, getTask, addTask, updateTask, delTask };
