import { useState } from 'react'
import './App.css'
import './Components/style.css'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Main />
  )
}

export default App
