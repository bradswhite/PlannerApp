import React, { useState } from 'react'
import Select from 'react-select'

const Add = ({ tasks, setTasks, cardKey, addTask, setRoute }) => {
	const [ text, setText ] = useState('')

	const [ card, setCard ] = useState(cardKey)

	
	const cardNames = [
		{ label: 'Monday', value: 0 },
		{ label: 'Tuesday', value: 1 },
		{ label: 'Wednesday', value: 2 },
		{ label: 'Thursday', value: 3 },
		{ label: 'Friday', value: 4 }
	]	
	const cardKeys = { m: 0, t: 1, w: 2, th: 3, f: 4 }

	const handleAdd = async () => {
		const id = await addTask(text)
		setTasks([
			...tasks,
			{ id, text, card, complete: 0 }
		])
		setRoute('home')
	}

	return (
		<div>
			<input value={text} onChange={e => setText(e.currentTarget.value)} />
			<Select
				options={cardNames}
				defaultValue={cardNames[cardKeys[cardKey]]}
				onChange={e => setCard([ 'm', 't', 'w', 'th', 'f' ][e.value])}
			/>
			<button onClick={handleAdd}>Add</button>
			<button onClick={() => setRoute('home')}>Cancel</button>
		</div>
	)
}

export default Add;
