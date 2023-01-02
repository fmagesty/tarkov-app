import React, { useState } from 'react'
import fetchItems from './services/fetchItems'
import RenderItem from './RenderItem'
import RenderCheckboxes from './RenderCheckboxes'

const ItemSearchHandler = () => {
  const [inputValue, setInputValue] = useState('')
  const [itemDataRequested, setItemDataRequested] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetchItems(inputValue)
    const itemResponseArr = response.data.items
    try {
      if (itemResponseArr.length >= 1) {
        console.log(
          `// Success: Item request found! Response: ${JSON.stringify(
            response
          )}`
        )
      }
    } catch (error) {
      console.log(error)
    }

    setItemDataRequested(itemResponseArr)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <RenderCheckboxes />
        <input
          type="text"
          id="item-search-input"
          name="item-search-input"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          placeholder="item name"
        />
        <button type="submit">Submit</button>
      </form>
      {itemDataRequested && <RenderItem itemArr={itemDataRequested} />}
    </>
  )
}

export default ItemSearchHandler
