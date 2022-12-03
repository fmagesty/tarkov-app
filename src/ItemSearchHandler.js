import React, { useState } from "react"
import fetchItems from "./services/fetchItems"
import RenderItem from "./RenderItem"

const ItemSearchHandler = () => {
	const [inputValue, setInputValue] = useState("")
	const [itemDataToRender, setItemDataToRender] = useState("")

	const handleChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleSubmit = async (inputValue) => {
		const response = await fetchItems(inputValue)
		const itemResponseArr = response.data.items
		if (itemResponseArr.length >= 1) {
			console.log(
				`// Success: Item request found! Response: ${JSON.stringify(response)}`
			)
		} else {
			console.log(
				`// Error: Item request not found. Response: ${JSON.stringify(
					response
				)}`
			)
		}
		setItemDataToRender(itemResponseArr)
	}

	return (
		<>
			<input
				type="text"
				id="message"
				name="message"
				onChange={handleChange}
				value={inputValue}
				placeholder='item name'
			/>
			<div>
			<button onClick={() => handleSubmit(inputValue)} type="submit">
				Submit
			</button>
			</div>
			{itemDataToRender && <RenderItem itemArr={itemDataToRender} />}
		</>
	)
}

export default ItemSearchHandler
