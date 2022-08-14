import React, { useState } from 'react'

const Item = ({ item, updateItem, setRoute, setEditId }) => {
	const [ complete, setComplete ] = useState(item.complete)

	const handleToggle = () => {
		updateItem({
			id: item.id,
			text: item.text,
			complete: complete === 0 ? 1 : 0
		})
		setComplete(complete === 0 ? 1 : 0)
		console.log(`Toggling item ${item.id}`)
	}

	const handleEdit = () => {
		setEditId(item.id)
		setRoute('edit')
	}

	return (
		<div>
			{item.id}
			<input
				type='checkbox'
				checked={complete !== 0}
				onChange={handleToggle}
			/>
			{item.text}
			<button onClick={handleEdit}>Edit</button>
		</div>
	)
}

export default Item;
