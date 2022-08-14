import React, { useState, useEffect } from 'react'

import { getItems, addItem, updateItem } from './services/itemService'

import Header from './components/Header'
import Items from './components/Items'
import AddItem from './components/AddItem'
import Edit from './components/Edit'

const App = () => {
	const [ items, setItems ] = useState([])

	const [ route, setRoute ] = useState('home')

	const [ editId, setEditId ] = useState(0)

	useEffect(() => { getItems(setItems) }, [])

	return (
		<div>
			<Header />
			{route === 'home' ? (
				<div>
					<Items
						items={items}
						updateItem={updateItem}
						setRoute={setRoute}
						setEditId={setEditId}
					/>
					<button
						onClick={() => setRoute('add')}
					>
						Add Item
					</button>
				</div>
			) : route === 'add' ? (
				<div>
					<AddItem
						items={items}
						setItems={setItems}
						addItem={addItem}
						setRoute={setRoute}
					/>
				</div>
			) : (
				<Edit
					setRoute={setRoute}
					item={items.filter(item => item.id === editId)[0]}
					items={items}
					setItems={setItems}
				/>
			)}
		</div>
	)
}

export default App
