import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [text, setText] = useState("")
  const [output, setOutput] = useState("")

  function handleInput(e) {
    setText(e.target.value)
  }

  function handleAdd() {
    setOutput(output + text)
  }

  return (
    <div>
      <input type="text" onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      <div>{output}</div>
    </div>
  )
}

export default App