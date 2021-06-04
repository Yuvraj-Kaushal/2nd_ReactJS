import React, { useState } from 'react'
import { Multiselect } from 'multiselect-react-dropdown'
import './App.css';

function App() {

  const data = [
    {Names: 'Yuvraj', id: 1},
    {Names: 'Rajjo', id: 2},
    {Names: 'Anmol', id: 3},
    {Names: 'Amisha', id: 4},
    {Names: 'Nishant', id: 5},
    {Names: 'Ajit', id: 6},
    {Names: 'Sachin', id: 7},
    {Names: 'Amaan', id: 8},
    {Names: 'Faisal', id: 9},
    {Names: 'Mahabir', id: 10}
  ]

  const [options] = useState(data);

  return (
    <div className="App">
    <div className="style">
      <h1>Multiselect Dropdown</h1>
      <Multiselect options={options} displayValue = "Names"/>
    </div>   
    </div>
  );
}

export default App;
