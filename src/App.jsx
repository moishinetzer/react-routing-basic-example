import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello there!</h1>
      <p>Check this out</p>
      <p>This is added</p>
    </>
  )
}

export default App
