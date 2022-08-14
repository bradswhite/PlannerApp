const url = 'http://localhost:8080/tasks/'

const getItems = async setItems => {
	const data = await fetch(url + 'getAll')
	const json = await data.json()
	setItems(json)
}

const getItem = async id => {
	const data = await fetch(url + id)
	const json = await data.json()
	return json
}

const addItem = async text => {
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

const updateItem = async newItem => {
	await fetch(url + newItem.id, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newItem)
	})
	console.log(`Item ${newItem.id} updated`)
}

const delItem = async id => {
	await fetch(url + id, { method: 'DELETE' })
	console.log(`Item ${id} deleted`)
}

export { getItems, getItem, addItem, updateItem, delItem };
