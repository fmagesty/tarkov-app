import React, { useState } from 'react'
import fetchItems from './services/fetchItems'
import RenderItem from './RenderItem'

const ItemSearchHandler = () => {
  const [inputValue, setInputValue] = useState('')
  const [itemDataRequested, setItemDataRequested] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
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
    setItemDataRequested(itemResponseArr)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
