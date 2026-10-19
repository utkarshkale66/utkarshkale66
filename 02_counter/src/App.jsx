import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let counter = 15
  const addValue = () => {
    console.log("Clicked", counter)
    counter = counter + 1;
  }

  return (
    <>
    <h1>Hello World</h1>
    <h2>Counter value: {counter} </h2>

    <button onClick={addValue}> Submit</button>
    </>
  )
}

export default App
