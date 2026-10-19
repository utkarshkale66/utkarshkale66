import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15) 

  const addValue = () => {
    console.log("Clicked", counter)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
    
  }

 const isDisabled = counter <= 0 
 const wasDisabled = counter > 19


  return (
    <>
    <h1>Hello World</h1>
    <h2>Counter value: {counter} </h2>

    <button onClick={addValue} disabled= {wasDisabled} > Add {counter}</button>
    <button onClick={removeValue} disabled = {isDisabled} >Remove {counter} </button>
    
    </>
  )
}
export default App
