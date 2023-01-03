import React, { useState } from 'react'
import './styles/ToggleContent.css'

const ToggleContent = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <button id="toggle" onClick={() => setToggle(!toggle)}>
        Toggle Content
      </button>
      {toggle && (
        <ul id="inside-content">
          <li className="content-item">About the App</li>
          <li className="content-item">API information</li>
          <li className="content-item">Suggestions</li>
        </ul>
      )}
    </>
  )
}

export default ToggleContent
