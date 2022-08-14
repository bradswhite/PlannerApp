import React, { useState } from 'react'

const Add = ({ items, setItems, addItem, setRoute }) => {
	const [ text, setText ] = useState('')

	const handleAdd = async () => {
		const id = await addItem(text)
		setItems([
			...items,
			{ id, text, complete: 0 }
		])
		setRoute('home')
	}

	return (
		<div>
			<input value={text} onChange={e => setText(e.currentTarget.value)} />
			<button onClick={handleAdd}>Add</button>
			<button onClick={() => setRoute('home')}>Cancel</button>
		</div>
	)
}

export default Add;
