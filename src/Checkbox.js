import React, { useState } from 'react'

const Checkbox = (item) => {
  const [checked, setChecked] = useState(false) // make this change state for each option
  item = item.item

  return (
    <div className="Checkbox">
      <input
        label={item.label}
        type="checkbox"
        id={item.id}
        name={item.label}
        checked={checked}
        onChange={() => setChecked(!checked)}
        value={item.label}
      />
      <span>{item.label}</span>
    </div>
  )
}

export default Checkbox
