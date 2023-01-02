import React from 'react'
import Checkbox from './Checkbox'

const RenderCheckboxes = () => {
  // transfer this to a separate data file
  const optionList = [
    { id: 0, label: 'profit' },
    { id: 1, label: 'ammo' },
    { id: 2, label: 'maps' },
    { id: 3, label: 'items' },
    { id: 4, label: 'traders' },
    { id: 5, label: 'bosses' },
    { id: 6, label: 'barter' },
    { id: 7, label: 'hideout' },
  ]

  let checkbox = optionList.map((item) => (
    <Checkbox item={item} key={item.id} />
  ))

  return checkbox
}
export default RenderCheckboxes
