import React, { useState } from 'react'

import { updateItem, delItem } from './../services/itemService'

const Edit = ({ setRoute, item, items, setItems }) => {
	const [ text, setText ] = useState(item.text)

	const handleEdit = () => {
		updateItem({
			id: item.id,
			text,
			complete: item.complete
		})

		setItems(
			items.map(i => i.id === item.id ?
				{
					id: item.id,
					text,
					complete: item.complete
				} : i
			)
		)

		setRoute('home')
	}

	const handleDel = () => {
		delItem(item.id)

		setItems(
			items.filter(i => i.id !== item.id)
		)

		setRoute('home')
	}

	return (
		<div>
			<h2>Edit</h2>
			{item.id}
			<input
				value={text}
				onChange={e => setText(e.currentTarget.value)}
			/>
			<button onClick={handleEdit}>Edit</button>
			<button onClick={handleDel}>Delete</button>
			<button onClick={() => setRoute('home')}>Cancel</button>
		</div>
	)
}

export default Edit;
