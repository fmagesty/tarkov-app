import React from 'react'
import Checkbox from './Checkbox'
import { checkboxesData } from './data/checkboxesData'

const RenderCheckboxes = () => {
  let checkbox = checkboxesData.map((item) => (
    <Checkbox item={item} key={item.id} />
  ))

  return checkbox
}
export default RenderCheckboxes
