/**
 * Service functions to interact with cards in db
 * @author Brad White
 * @data 8-22
 */

// Base rest api url:
const url = 'http://localhost:8080/cards/'

/**
 * Fetches data from rest api and puts it into the `cards` state
 * @async
 * @param {function} setCards - set `cards` state
 * @returns {void}
 */
const getCards = async setCards => {
	const data = await fetch(url + 'getAll')
	const json = await data.json()
	for (var i in json) json[i] = json[i].name
	setCards(json)
}

/**
 * Fetches
 * @async
 * @param {id} id - id of card to find
 * @returns {json} - card data
 */
const getCard = async id => {
	const data = await fetch(url + id)
	const json = await data.json()
	return json
}

/**
 * Adds card to db
 * @async
 * @param {string} name - name of new card
 * @returns {number} - id of new card
 */
const addCard = async name => {
	const res = await fetch(url + 'add', {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({
			name
		})
	})
	console.log('New item added')
	return parseInt(await res.text())
}

/**
 * Updates card in db
 * @async
 * @param {json} newCard - card to replace existing card
 * @returns {void}
 */
const updateCard = async newCard => {
	await fetch(url + newCard.id, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newCard)
	})
	console.log(`Card ${newCard.id} updated`)
}

/**
 * Delete card in db
 * @async
 * @param {int} id - id of card to delete
 * @returns {void}
 */
const delCard = async id => {
	await fetch(url + id, { method: 'DELETE' })
	console.log(`Card ${id} deleted`)
}

// Exporting service functions:
export { getCards, getCard, addCard, updateCard, delCard };
