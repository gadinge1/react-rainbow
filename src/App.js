// import logo from './logo.svg';
import './App.css';
import ColorBlock from './component/ColorBlock';
import ColorForm from './component/ColorForm';

import React, { useState } from 'react'

function App() {
  let [colors, setColors] = useState([ 'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red' ])
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  return (
    <div className="App">
        {colorMap}
        <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
