import React from 'react'

import Item from './Item'

const Items = ({ items, updateItem, setRoute, setEditId }) => {
	return (
		<div>
			{items.map(item => <Item
				item={item}
				updateItem={updateItem}
				setRoute={setRoute}
				setEditId={setEditId}
			/>)}
		</div>
	)
}

export default Items;
