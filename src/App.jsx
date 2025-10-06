import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  return (
    <div className="app">
      <h1>Contador</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={incrementCount}>Incrementar</button>
        <button onClick={decrementCount}>Decrementar</button>
      </div>
    </div>
  )
}

export default App
