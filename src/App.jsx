import { useState } from 'react'
import Header from "./components/header/Header"
import Section from './components/section/Section'
import Github from './components/github/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Section />
      <Github />
    </div>
  )
}

export default App
