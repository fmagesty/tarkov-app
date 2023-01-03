import './styles/App.css'
import React from 'react'
import ItemSearchHandler from './ItemSearchHandler'
import ToggleContent from './ToggleContent'

function App() {
  return (
    <div className="App">
      <span>Search here for your item:</span>
      <ItemSearchHandler />
      <ToggleContent />
    </div>
  )
}

export default App
