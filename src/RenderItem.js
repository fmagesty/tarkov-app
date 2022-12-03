import React from 'react'

const RenderItem = (itemArrData) => {
  const itemArr = itemArrData.itemArr

  const renderItems = () => {
    let itemArrIntoJsx = itemArr.map((item) => (
      <ul key={item.id}>
        <li>Name: {item.name}</li>
        <li>Short name: {item.shortName}</li>
        <li>Item ID: {item.id}</li>
      </ul>
    ))
    return itemArrIntoJsx
  }

  return <>{renderItems()}</>
}

export default RenderItem
